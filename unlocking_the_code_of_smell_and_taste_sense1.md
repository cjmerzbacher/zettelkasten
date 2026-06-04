---
id: "2026052501"
author: Patina
title: "Unlocking the Code of Smell and Taste: Introducing Sense1"
year: "2026"
venue:
link: https://patina.earth/whitepaper.html
tags:
  - artificialintelligence
links:
---
- Sense1 - Scent Foundation Model to predict human olfactory receptor activation and map those activations to perceptual qualities
- 400 types of olfactory receptor, as opposed to 3 visual receptor types
- Olfaction requires chemical binding and hasn't been represented in a computer well yet
	- AlphaFold and protein folding models can predict how a specific olfactant binds to a receptor
- No consistent universal vocabulary of smells - extremely culturally mediated
- Receptor code operates on level of biology, not culture
- Molecules that activate the same receptor share similar perceptual qualities
	- Molecules with small structural changes can activate very different receptors
	- Molecules activate multiple sets of receptors - but not a uniform number! Fruity is a few receptors; floral is many.
- Machine olfaction history
	1. Descriptor prediction - ML models to predict "fruity", "sweet" etc. from molecular structure
	2. Computational protein modelling and docking - but fail to transfer from general models
	3. Receptor-to-perception mapping
- Compared to structural biology baseline; AUROC best only 0.616 
- Per-receptor-family AUROC
- Screening enrichment estimation via putting 1M candidates through model and measuring top-1, top-5 hit performance
- Literature compounds labels validated with Pearson R correlation coefficient between labels - positive is good.
	- Can scan over receptor space and get labeled ranks