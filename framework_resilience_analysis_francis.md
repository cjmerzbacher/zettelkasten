---
id: "20210124200040"
type: literature
author: "Francis, R., and B. Bekera."
title: "A metric and frameworks for resilience analysis of engineered and infrastructure systems"
tags: [resilience, engineering]
---

Reliability Engineering and System Safety, 121, 90-103, 2014.

- Resilience’s “diversity in usage complicates its interpretation and measurement”
- Risk has two factors: the likelihood an event determined undesirable occurs and the consequences given the occurrence of that event
- A hazard is an event or set of events of concern to system stakeholders the occurrence of which could compromise the operation and identity of the system
- Vulnerability is the joint conditional probability distribution of system failure and event(s) consequences given that an adverse event has occurred
- A risk triplet includes a scenario, the likelihood of manifestation of the scenario, and the consequences of events within that scenario (Source: Kaplan 1997)
- Two views of risk, and therefore resilience:
    - Risk is an inherent property of an engineered system
    - 	Risk is an epistemic approach to the behavior of a system: knowledge based
- 	Risk vs. resilience: risk implies a loss of any time, whereas resilience is an endowed and enriched property capable of combating disruptive events
- 	Resilience triplet (my term): paradigm proposed by Francis et al 
    - 	Absorptive capacity: anticipating and absorbing potential disruptions
    - 	Adaptive capacity: developing adaptive means to accommodate changes within/around system
    - 	Restorative capacity: establish response behaviors aimed at either building the capacity to withstand the disruption or recover as quickly as possible after an impact
- 	Source: Holling 1973
- 	Resilience assessment framework
    - 		Identify the system
    - 		Perform a vulnerability analysis. Resilience assessment must explicitly incorporate time into analysis
    - 		Identify system objectives – what is the purpose of the system and how is it maintained (see Meadows)
    - 		Assess resilience triplet
- 		Measuring resilience: 
    - 		\rho_i\left(S_p,F_r,F_d,F_o\right)=S_p\frac{F_r}{F_o}\frac{F_d}{F_o} where S_p\ =\ (tδ/tr*)exp[-a(tr-tr*)] for tr ≥ tr*(tδ/tr*) otherwise
    - 		Sp is speed recovery factor, Fr is performance at new stable level following all recovery efforts, Fr* is performance after initial post-disruption equilibrium state attained, Fd is the performance level immediately post disruption, and Fo is the initial system performance level. td is the slack time, tr is the time to final recovery, tr* is the time to complete the initial recovery actions, and a is the parameter controlling decay in resilience due to time in new equilibrium.
- 		Other metrics: 
    - 		Entropy-weighted measure of resilience for incorporating subjective probabilities about potential disruptions from experts 
    - 		Expected system functionality degradation
- 		Source: Resilient by Design: Creating Businesses that Adapt and Flourish in a Changing World. (Fiksel 2015)
- 		Idea of design for ecological versus engineered resilience in socio-technical systems is an emerging concept that advocates the design of engineered systems based on the ecological principles of diversity, adaptability, interconnectedness, mutual evolution, and flexibility. (Sources here)
- 		Safe-fail systems vs. fail-safe
- 		Aleatory vs. epistemic uncertainty: uncertainty built into system vs. uncertainty due to lack of knowledge about the system and factors acting on it determines whether we should build fail-safe or safe-fail systems.
