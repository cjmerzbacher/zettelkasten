###### Metadata
ID: 20210124200305
#literature #reference
#author Jackson, S., and TLJ Ferris
#title Resilience principles for engineered systems
#resilience #engineering

Systems Engineering, 16(2), 152-164, 2013.

- Includes many useful definitions of terms
- Two categories of principles: Mathematical principles (quantifiable) and heuristics
- Resilience is an attribute of a system, not an add-on to a system
- Example case studies of failures table – discrete vs continuous damage events.
Resilience Taxonomy:
- Capacity/Robustness
- Absorption: System should be capable of absorbing the magnitude of disruption it encounters within expected threat levels
    - Limit degradation: do not allow to degrade due to poor maintenance
    - Physical Redundancy: Two or more independent legs of the system can fail separately (rooted in reliability analysis)
    - Functional redundancy: Distribute functions between branches and have more ways to perform a critical task
    - Layered defense: Two or more independent principles that address a single point of system vulnerability (Swiss cheese model)
- Flexibility/Adaptability
    - Reorganization: system should be capable of changing its entire architecture or structure in the face of a threat
    - Human in the loop: Humans in systems that have need for cognition
    - Human in control: Automated systems should not have critical final decision making authority
        - Reduce human error
        - Automated functions
    - Reduce complexity: minimize the number of complex components
        - Analyze using topology metrics?
    - Repairability: should have the capability of being brought up to partial/full functionality
    - Loose coupling: capability to limit the ability of failures to propagate from one component to the next in a system
- Tolerance
    - Localized capacity: Functions should be distributed through nodes (aka modularity) 
    - Drift correction: If system is drifting towards resilience boundary and a failure is approaching, measures taken to avoid the threat or corrective action
        - Measuring distance from edge of safety zone
    - Neutral state: Delay taking action until can survey situation
- Cohesion/Integrity
    - Inter-node interactions: Every node can communicate with every other node
    - Reduce hidden interactions: Potentially harmful interactions between nodes of system reduced (system design vs component design)
- Many interdependencies between these subprinciples: eg. absorption and no latent flaws, margin, and context spanning with independent review.
