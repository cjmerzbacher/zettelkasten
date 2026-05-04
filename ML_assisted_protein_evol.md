---
id: "20201002094334"
type: literature
author: "Zachary Wu, Frances Arnold et al."
title: "Machine Learning-assisted directed protein evolution with combinatorial libraries"
tags: [gradschool, machinelearning, protein]
---

# Machine learning-assisted directed protein evolution with combinatorial libraries

### Abstract
Directed protein evolution can be sped up using machine learning. ML models provide a fast method to explore the sample space computationally. Validated approach on empirical fitness landscape for GB1 binding protein. Machine learning to enhance directed evolution

Author background: Arnold won 2018 Nobel Prize for discovery of directed evolution for protein engineering

### Results
**Directed evolution** constructs variants from parental sequences and screens them for desired properties, then discards all but best strains repeatedly.
Simulated single-mutation evolutionary walks starting from all variants reported (150k). Algorithm:
1. All possible mutations tested at each of the four mutated positions
2. Best amino acid fixed, restricted from further exploration
3. Continue iteratively until all are fixed
Also used recombination: Sample top 3 variants from combinatorial library and randomly recombine (did not perform well)

ML allows for larger steps through sequence space (identifies combinations of beneficial mutations, reduces indirect paths)
Diverse solutions in protein space for specific properties (**nonglobal optimization or ensemble learning?**)

### Methods
Sequence-function pairs used to train a panel of models with default hyperparameters using scikit-learn in python

- KNN
- lenear (bayesian ridge, elastic net, lasso LARS, ridge, automatic relevance detection)
- decision trees
- random forests (adaboost, bagging, gradient boosting)
- multilayer perceptrons

Top three model typese selected and grid-search crossvalidation used to id optimal hyperparameters
