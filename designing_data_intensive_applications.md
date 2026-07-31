---
id: "2026062201"
author: Martin Kleppmann
title: Designing Data Intensive Applications
year: "2016"
venue: Book
link:
tags:
  - computerscience
  - datascience
links:
---
> building for scale that you don’t need is wasted effort, and may lock you into an inflexible design. In effect, it is a form of premature optimization.

## Reliable, Scalable, and Maintainable Applications

- Data-intensive vs. **compute-intensive applications**: Is CPU power a limiting factor, or is the amount of data?
- **Data-intensive applications** often need to:
	- Store data (databases)
	- Remember expensive operation results (caches)
	- Allow search (search indexes)
	- Send messages to other processes (stream processing)
	- Crunch large amounts of accumulated data (batch processing)
- Different **data systems** have different affordances, access patterns, performance characteristics.![[Screenshot 2026-06-22 at 09.14.29.png]] 
- Three goals of software systems:
	- Reliability
	- Scalability
	- Maintainability