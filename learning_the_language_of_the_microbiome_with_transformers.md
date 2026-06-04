---
id: "2026051901"
author: Neythen J Treloar∗ , Saif Ur-Rehman & Jenny Yang
title: Learning the Language of the Microbiome with Transformers
year: "2026"
date: ""
venue: BioArxiv
link: https://www.biorxiv.org/content/10.64898/2026.05.02.722381v1.full.pdf
tags:
  - microbiome
  - biology
  - machinelearning
  - artificialintelligence
links:
---

# Learning the Language of the Microbiome with Transformers

Linked from the COO of [Outpost Bio](https://www.outpost.bio), a London-based startup focused on microbiome computational biology. 
Connection: [Alex Merwin](https://www.linkedin.com/in/alexmerwin/)
### Abstract

- Atlas, a pretraining dataset with 593k microbiome datapoints from MGnify database.
- Train causal language models (Waypoint) - 6M to 170M parameters
- Compass - curated benchmark of eight predictive tasks spanning biome classification, drug-microbiome interactions, drug degradation, infant gut development.
- Pretraining improves downstream task performance with over 10k samples.

### Results
- Foundation model paradigm works well for microbiome because there are large unlabelled datasets in public but few labeled datasets that are small and task-specific
- Taxonomic abundance profiles as sequences amenable to pretraining
- Fallback tokenization strategy that preserves taxonomic information for samples where genus level assignments are unavailable
- Training on taxonomic abundance data across 4 sequencing modalities: amplicon 16S rRNA, whole-genome shotgun, metagenomic assembly and metatranscriptomic. N=4100 studies
	- Remove taxa with relative abundance lower than 0.0001, remove any samples with less than 10 taxa. Results in 539k datapoints
- Tokenizing at the species level - but many variants cannot be assigned; so then a fallback strategy is applied that uses the most specific available higher-rank classification. Moved forward with genus-level tokenisation with fallback.
- GPT-2 style causal language models trained by increasing the hidden dimension and number of transformer layers, holding the per-head dimension fixed throughout. Context length 512, same tokenizer. 
- Show scaling laws based on eval loss: 
- ![[Screenshot 2026-05-19 at 09.57.01.png]]
- Model pretraining seems to decrease overfitting - larger models perform better with pretraining (steady performance gains)
- Pretraining on next-token prediction objective 
- Sequence-level representation obtained by taking the hidden state of the last non-padding token (EOS position). For drug degradation, drug identity was concatenated as a one-hot encoding of the compound. 
- For non-neural baselines a bag-of-taxa feature vector constructed - each dimension corresponds to a unique taxon observed 

**Benchmarking** 
- 8 benchmark tasks defined from smaller labelled datasets
- Pretrained models compared to 
- Question - clarify about what was done to filter taxa from classical baselines? Which strategy was used and why? Which would over/under estimate performance?
"Notably, even relatively small pretrained models (e.g., 6M
parameters) outperform larger non-pretrained transformers, reinforcing the value of learned representations over raw model capacity."

## Questions for Alex & team
- Clarify about what was done to filter taxa from classical baselines for benchmarking. Which strategy was used and why? Which would over/under estimate performance?
- Alternative representation learning strategies and extractions from transformer models?