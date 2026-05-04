---
title: "More Really Is Different"
date: "2026-02-24"
tags: [emergence, math, physics, models]
links: [anderson-more-is-different]
source: "Mile Gu, Christian Weedbrook, Álvaro Perales, Michael A. Nielsen (2024)"
author: Andy
---

# Overview

[Anderson](anderson-more-is-different.md) (1972) argued that macroscopic laws cannot be derived from microscopic ones. Gu et al. formalize this claim by proving it mathematically for the infinite periodic Ising lattice. They show that many macroscopic observable properties (magnetization, correlation length, partition functions) are formally undecidable, meaning no algorithm can compute them from the microscopic Hamiltonian in the general case. The proof works by encoding cellular automata (which can simulate Turing machines) into the ground states of periodic Ising lattices, then invoking Rice's theorem to show that macroscopic properties dependent on the CA's output cannot be generally computed.

# General Notes

This is the paper that puts actual mathematical teeth behind Anderson's philosophical argument. Anderson gave examples and intuitions; Gu et al. give a proof. Worth noting though that the proof only holds for *infinite* lattices; they acknowledge this in the discussion and argue that infinite-system concepts (phase transitions, renormalization group) are still essential for understanding finite real-world systems, even if technically all finite systems are computable.

# Annotations

> [Anderson](anderson-more-is-different.md) suggested that 'More is Different' \[...] We strengthen this claim by proving that many macroscopic observable properties of a simple class of physical systems (the infinite periodic Ising lattice) cannot in general be derived from a microscopic description

> in the limit of infinite systems, emergent principles take over and govern the behavior of the system, which can no longer be deduced from the behavior of the constituent parts

> at its lowest energy state, a general class of macroscopic properties cannot be generally predicted from knowledge of the lattice Hamiltonian H<sub>k</sub>. Thus any macroscopic law that governs these quantities must be logically independent of the fundamental interactions. 

> Rice's theorem states that any non-trivial question about a Turing machine's black-box behavior in undecidable, i.e., any question about the functional relationship between inputs and outputs.

> Numerous simple physical systems capable of simulating arbitrary Turing machines have been proposed. Since such 'universal' systems are as powerful as Turing machines, and thus an arbitrary computer, the only viable general method of predicting the dymanics of such systems is by direct simulation. The only way to find whether or not it halts is to run the machine *ad infinitum*, there exists no algorithm that can determine the eventual behavior of any universal system.

AP: This is the key link between computation and physics. If a physical system can simulate a Turing machine, then the physical system inherits the Turing machine's undecidability. The physics doesn't get to be "easier" than the computation it encodes.

> The 'Game of Life' is not unique, and belongs to a general class of discrete dynamical systems known as cellular automata (CA)

> The dynamics of a CA are governed by an update rule applied identically to each cell, reminiscent of a periodic Ising lattice where each block experiences the same Hamiltonian. This motivates encoding the dynamics of a CA in the ground state of the periodic Ising lattice.

AP: The mapping is CA → Ising lattice, where time steps of the CA become spatial layers of the lattice. Each "designer Ising block" is constructed so that its ground state encodes a logical operation (f, FANOUT, SWAP). Stack them together and the ground state of the whole lattice is the computation. 

> our results imply that for any such observable, there must *exist* a specific Ising lattice for which it is not possible to prove the ground state value of the observable.

AP: They're not saying all Ising lattices are unsolvable. Many specific ones are. The claim is that there's no general algorithm that works for every periodic Ising lattice. Specific instances can still be solved; you just can't guarantee a method that always works.

> The development of macroscopic laws from first principles may involve more than just systematic logic, and could require conjectures suggested by experiments, simulations or insight.

> A 'theory of everything' is one of many components necessary for complete understanding of the universe, but is not necessarily the only one.

AP: This is the real punchline. Even a complete set of fundamental laws wouldn't be sufficient. You'd still need experiments, simulations, and new conceptual frameworks at each scale. Anderson said it; these authors proved it (at least for Ising lattices).