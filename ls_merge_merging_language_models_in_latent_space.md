---
id: "2026051902"
author: |-
  Bedionita Soro1∗ Aoxuan Silvia Zhang1∗ Bruno Andreis3,4∗ Jaehyeong Jo1
  Song Chong1 Sung Ju Hwang
title: "LS-Merge: Merging Language Models in Latent Space"
year: "2026"
venue: ICLR 2026
link: https://openreview.net/pdf?id=VSDV0SWwOC
tags:
  - artificialintelligence
  - machinelearning
  - llms
links:
---

Linked by Bruno Andreis (author) in person. This work is on LLMs but they have applied the same "deep functional networks" to materials design to bridge multimodality gaps.
## Notes

- Encode data (model weights) into a smooth latent space, which enables cross-architecture operations.
![[Screenshot 2026-05-19 at 14.51.14.png]]
- Merging process occurs on latent space, which is a consistent dimensionality. Mapping via generative models such as VAEs, diffusion models, normalizing flows.
- Viewing MLP layer summary statistics, NN weights exhibit near-zero means, low variances, small positive skewness, but **markedly high kurtosis** which indicates that rare, high-weight parameters which are likely functionally important.
	- Contradicts Gaussian assumptions used in prior work. Encoders must preserve tail events vs. overregularizing towards a narrow Gaussian
- Use transformer-based VAE (chosen for strong generalization to unseen checkpoints and faster training than CNNs per-parameter)
	- Flatten weight tensor, then zero pad to a length and partition into chunks to be embedded
	- First train deterministic autoencoder (KL divergence off) to convergence, then enable the KL term nad fine-tune to structure the latent space without sacrificing fidelity.
- PCA collapses functional performance, while LS-Merge VAE retains near-original accuracy at all compression levels
