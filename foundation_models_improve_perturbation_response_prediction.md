---
id: "2026051804"
author: Cole et al
title: Foundation Models Improve Perturbation Response Prediction
year: "2025"
tags:
  - artificialintelligence
  - bioengineering
links:
---
Related: Virtual cell challenge
Affiliations: GenBioAI, Palo Alto

- Goal: predicting outcome of cellular perturbations (genetic or chemical)
	- Readouts: cell death, growth, imaging, gene expression (single-cell)
	- Foundation model prediction can show that a model has learned some kind of underlying transferrable mechanism
- Embedding-centric view: Generate perturbation embeddings for many FMs trained on different modalities to see if they outperform simple baselines 
	- All regression with KNNs
	- Baselines: PCA, training mean, no change, experimental error as upper limit
- Integrate FMs with attention-based fusion to improve results
- Embeddings vary dramatically in their utility for genetic perturbation prediction
"the relatively small scale of current perturbation datasets makes foundation models highly susceptible to overfitting during fine-tuning."
- Embeddings derived from same types of information tend to be more similar, even if the models differ significantly
	- Measured via CCA clustermap of embedding score
- Complex embedding translation methods do not significantly outperform simple ones
- Interactome-based FMs based on the underlying networks activated in the cell perform particularly well
- Interestingly: they find that off-the-shelf small molecule embeddings perform very poorly on small molecule benchmarks - trained to predict chemical properties not connected to biological function
	- Related to the conditioned representation idea?