---
id: "2026050501"
author: Nathan Lambert
title: How much does distillation really matter for Chinese LLMs?
year: "2026"
tags:
  - machinelearning
links:
  - https://www.interconnects.ai/p/how-much-does-distillation-really?utm_source=substack&utm_medium=email
---
Author: Nathan Lambert, ML researcher in post-training at Allen Institute for AI: https://natolambert.com
- Distillation: using a stronger AI model's outputs to teach a weaker model. 
- **knowledge distillation** (Hinton et al 2015) - learning to match the probability distribution of a teacher model. 
- Today's distillation is more synthetic data.
	- Generated from stronger model via API. 
"Synthetic data is arguably the single most useful method that an AI researcher today uses to improve the models on a day to day basis. Yes, architecture is crucial, some data still needs exclusively human inputs, and new ideas like reinforcement learning with verifiable rewards at scale can transform the industry, but so much of the day to day life in improving models today is figuring out how to properly capture and scale up synthetic data."
- US frontier labs have accused Chinese labs (DeepSeek, Moonshot, MiniMax) of jailbreaking their APIs to perform distillation attacks
- DeepSeek (150k exchanges) - experimenting with rubrics but negligible impact
- Moonshot + Minimax (over 3.4M and 13M exchanges) - focused on agentic coding and computer use.
- Research has shown that distillation isn't directly a win - there are many cases where taking outputs from a teacher model makes the student model worse. 
- Reinforcement learning at scale required to train the best models. 