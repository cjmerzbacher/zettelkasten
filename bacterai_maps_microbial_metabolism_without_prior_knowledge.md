---
id: "2025052101"
author: Adam C. Dama, Noah S. Schmid, Kenan Jijakli, Kevin S. Kim, Danielle M. Leyva, Annamarie P. Lunkes & Paul A. Jensen
title: BacterAI maps microbial metabolism without prior knowledge
year: "2023"
venue: Nature microbiology
link: https://www.nature.com/articles/s41564-023-01376-0
tags:
  - artificialintelligence
  - synbio
  - bioengineering
links:
  - dynamic_knowledge_graph_approach_to_distributed_self_driving_laboratories
---

# BacterAI maps microbial metabolism without prior knowledge

Flagship paper from Jensen lab, which is heading up the delivery of the Align Microbes proposal.

- Learning the amino acid requirements for two streptococci via gameplay agents.
	- Transfer learning to accelerate BacterAI when investigating larger environments (up to 39 ingredients)
- Deep reinforcement learning approach - branch of AI where agents solve games by trial and error
	- "Playing science" with automated combinatorial experiments
	- Selects 336 experiments per day (replicates and controls -> 1152 assays)
- Phase 1: BacterAI tries to find media that span the growth front - boundary that separates growth and no-growth media that share all but one ingredient
	- Trains NN to predict fitness of bacterium in all possible media
	- Searches for untested no-grow pairs and requests batches of experiments.
- Search uses a rollout algorithm
	- Exploit: look for media with the fewest ingredients that lie directly on either side of the growth front
	- Exploring: beginning with a complete medium, remove AAs until the agent reaches the growth front.
- Retrains the NNs after each batch and learning cycle continues
- Not programmed to distribute its experiments in any particular way.
- NNs - 25 bootstrap aggregated (bagged) aNNs to predict fitness. One imput layer, 2 hidden layers, 1 output layer, ReLu. Results averaged to create final prediction.
- Markov Decision Process following trajectories through the space - combination of experiments in media. 
	- Removes ingredients where the neural network predicts no growth. Reward expected for removing an ingredient +1 for each ingredient removed.
	- Hyperparameter to control exploration and exploitation

Comments: Required 3000 experiments and 9 iterations to reach 90% accuracy with binary prediction. 
Question for authors:
- Why did you focus on the growth front vs. regressing growth? Choosing to binarize the problem makes it easier. 
- Do you think higher batch sizes would speed convergence? What is biggest lab limitation?
- Why did you not use EI or other information criteria or uncertainty-aware modelling to select exploration samples?