###### Metadata
ID: 20210119180901
#literature #reference
#author Brennan Klein, Ludvig Holmér, Keith Smith, Mackenzie Johnson, Anshuman Swain, Laura Stolp, Ashley Teufel, April Kleppe
#title Resilience and evolvability of protein-protein interaction networks
#resilience #networks

Source of idea of network resilience (or robustness): https://www.pnas.org/content/116/10/4426
Defined as: Shannon entropy of component sizes distribution as you iteratively disconnect more nodes

Iteratively remove fraction f of nodes and calculate modified Shannon diversity, then sum area under the curve.
Notebook: https://nbviewer.jupyter.org/github/jkbren/presilience/blob/master/code/01_Intro_Network_Resilience.ipynb

uh how does he make these figures i am in awe

Different species resilience values of PPI networks varies
Repo: https://github.com/jkbren/presilience

Questions:
1. How are biological systems able to successfully incorporate novelty
2. What is the evolutionary role of biological noise in evolutionary novelty

Novelty - introduction of new protein, represented by new node in network

Data source: STRING and SNAP databases for 3 species: yeast, ecoli, and human. For prospective resilience, pulled expression data from NCBI GEO and EMBL-EBI Expression Atlas.

**Prospective resilience**

3 methods of attachment of new nodes:
1. Uniform random attachment
2. Simulated gene-expression preferential attachment
3. Degree-based attachment

Vary number of new links that each node enters the network with. Checked other network parameters like modularity and showed they have different results in these different genomes.

Contact authors: https://www.keithmalcolmsmith.com/