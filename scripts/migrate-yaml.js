'use strict';

/**
 * Normalize YAML frontmatter across all notes to the canonical schema:
 *   id, type?, author, title, year, date, venue, link, source?, tags, links
 *
 * - Adds empty placeholders for missing required fields (author, title, year,
 *   date, venue, link, tags, links) so every note has the same shape.
 * - Preserves existing values, including legacy fields like `type` and `source`.
 * - Rewrites tags/links as multi-line YAML lists for visual consistency.
 *
 * Run with:  node scripts/migrate-yaml.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set([
  'node_modules', 'site', 'src', 'public', 'scripts',
  '.git', '.obsidian', '.vscode', '.github',
  'examples', 'figs',
]);
const SKIP_FILES = new Set(['template.md', 'MEMORY.md', 'README.md']);

const CANONICAL_ORDER = [
  'id', 'type', 'author', 'title',
  'year', 'date', 'venue', 'link',
  'source', 'tags', 'links',
];
const REQUIRED = ['id', 'author', 'title', 'year', 'date', 'venue', 'link', 'tags', 'links'];

function needsQuotes(s) {
  if (s === '') return true;
  if (/^[\s]/.test(s) || /[\s]$/.test(s)) return true;
  if (/^[-?!&*|>%@`#]/.test(s)) return true;
  if (/^[0-9]/.test(s)) return true;
  if (/[:#'"\[\]\{\},]/.test(s)) return true;
  if (/^(true|false|null|yes|no|on|off|~)$/i.test(s)) return true;
  return false;
}

function quote(s) {
  return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

function emitScalar(v) {
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return quote(v.toISOString().split('T')[0]);
  const s = String(v);
  if (s === '') return '""';
  return needsQuotes(s) ? quote(s) : s;
}

function emitField(key, value) {
  if (key === 'tags' || key === 'links') {
    if (!Array.isArray(value) || value.length === 0) return `${key}:`;
    const items = value
      .filter(v => v !== null && v !== undefined && String(v).trim() !== '')
      .map(item => '  - ' + emitScalar(item));
    if (items.length === 0) return `${key}:`;
    return `${key}:\n${items.join('\n')}`;
  }
  const scalar = emitScalar(value);
  if (scalar === '') return `${key}: ""`;
  return `${key}: ${scalar}`;
}

function buildFrontmatter(data) {
  const out = {};
  const hasKey = (k) => Object.prototype.hasOwnProperty.call(data, k);

  for (const key of CANONICAL_ORDER) {
    if (hasKey(key)) {
      out[key] = data[key];
    } else if (REQUIRED.includes(key)) {
      out[key] = (key === 'tags' || key === 'links') ? null : '';
    }
  }
  // Preserve any extra fields not in canonical order
  for (const k of Object.keys(data)) {
    if (!(k in out)) out[k] = data[k];
  }

  const lines = ['---'];
  for (const k of Object.keys(out)) {
    lines.push(emitField(k, out[k]));
  }
  lines.push('---');
  return lines.join('\n');
}

function collectMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;
      results.push(...collectMdFiles(path.join(dir, entry.name)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      if (SKIP_FILES.has(entry.name)) continue;
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

let migrated = 0, skipped = 0, errors = 0;
for (const file of collectMdFiles(ROOT)) {
  const raw = fs.readFileSync(file, 'utf8');
  if (!raw.startsWith('---')) {
    console.log('SKIP (no frontmatter):', path.relative(ROOT, file));
    skipped++;
    continue;
  }
  let parsed;
  try {
    parsed = matter(raw);
  } catch (e) {
    console.warn('ERROR parsing', path.relative(ROOT, file), '-', e.message);
    errors++;
    continue;
  }
  const newFrontmatter = buildFrontmatter(parsed.data);
  const body = parsed.content.replace(/^\n+/, '');
  const output = newFrontmatter + '\n\n' + body;
  fs.writeFileSync(file, output);
  migrated++;
}

console.log(`\nMigrated: ${migrated}, Skipped: ${skipped}, Errors: ${errors}`);
