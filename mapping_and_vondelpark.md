---
id: "2026061501"
author: Charlotte
title:
year: "2026"
venue:
link:
tags:
links:
  - designing_ai_for_disruptive_scienc
---
## Quotes/References

[[designing_ai_for_disruptive_science]]

- Jorge Luis Borges, *On Exactitude in Science*: A map as large and detailed as the empire itself. A parable for how too much knowledge can become impractical.
- Deeper problem: "adding detail only gives you more of the same kind of information - more roads, more mountains, more villages - when what you might need is a completely different schematic."
- Scientific paradigms can be thought of as a map, often unifying with a simpler set of principles with knock-on implications.
	- Example: Maxwell's equations

## Draft 

Hello friends,

I have a confession to make: I have been listening to a LOT of Brian Eno lately. I don't know if it's possible to be a *Music for Airports* fiend, but if it is, I have become one in recent months. I've always liked to listen to music while working, and my YouTube algorithm on my work computer has been increasingly taken over by ambient music: full Eno albums on the one hand, manifestation binaural beats titled with angel numbers and AI generated shrimp jazz on the other. A surprising number of these are cat themed (see below). 

After one too-many autoplayed tracks, I decided to just return to the basics: an entire album, played straight through, no breaks except for the occasional Zoom meeting. The Ambient series of albums all have maps of some kind as their covers: a topographical detail, XXX. I went down a bit of a rabbit hole trying to see if anyone has identified the location of these maps. Ambient One is clearly an old Ordinance Survey map based on its ink tone and features, but could be nearly anywhere in the UK based on how zoomed in it is. XXX (more info about maps) In the end, I think the unidentifiability of these maps is meant to emulate Eno's music: there's no obvious start or end, no clear reference point for the sense-making machines on top of our shoulders to lock onto. Paradoxically, that allows us to relax, to have the music (or the map) act as background noise, to enable a more diffuse sort of attention.

This one's a bit of a catch-all essay, but like February's installment, I think that the associative mode has its benefits. If we put two things next to each other, what can that pairing draw out? I encourage you to draw your own maps.

Charlotte

Figure 1. The many cats of my YouTube recommended. I will say that Club Carter (middle) is one of my favorite things on the platform right now - I am ON the notification on Monday. Fellow Amsterdammer Sagid Carter has incredible taste, go check her out. (LINK)

![[Screenshot 2026-05-18 at 10.12.37.png]]
![[Screenshot 2026-05-27 at 10.25.14.png]]
![[Screenshot 2026-05-29 at 15.23.59.png]]

Figure 2: This one gets me, I DO want to be a cat sitting in a ray of sunlight. I ALSO want to be a shrimp with a saxophone. Neither of these videos is good music, by the way. Love you shrimps, but the jazz career isn't taking off anytime soon. 

### Stargazing in Vondelpark: Maps as rememberance and reconstruction

Ever since I moved to Amsterdam six months ago, I've been drawing maps. It started as a method of learning how to navigate the city by bike: Google Maps directions break down when many streets are one-way for cars but two-way for bicycles, or when the most direct route often requires crossing tram tracks, navigating a busy intersection, or making a hairy left turn. In addition, construction is rarely if ever marked in online maps, which I found out the hard way trying to cycle down the Overtoom, which had a bike line closed at random intervals that moved every few days for *months*. The Dutch government recognizes this, and has a set of maps online that let you select routes that avoid busy streets, have fewer turns, are better lit at night, or go through more scenic nature (1), but they're not served in a way that works well on mobile. 

These maps started as logistical, but embed emotional preference just as deeply: I will detour to cycle through a park, I particularly despise the tree-root-distorted cobblestones on Amstelveenseweg, I love passing over a canal or through the Rijksmuseum bike tunnel. I wanted to get away from relying on maps at all, really, and build an understanding of the city's layout in my head, tied to the places that matter to me the most. And, I wanted to document how my view of the city changed over time as I explored it more. 

Each month, I've drawn - by hand, not to scale, and often quite messily - a map of the city. I'll label or sketch my my new favorite cafes, the friends' houses I've visited, the best park picnic spots, museums I now love. What is important to me shifts month-to-month, following changes in the seasons, my social life, and coincidence. It also highlights which areas of the city are empty. The blank page reminds me of the places left to explore.

This mapping reminded me of some previous work I did with colleagues as part of a working group for the Santa Fe Institute. We hosted a workshop on "Models of the World in Artificial Systems", trying to understand what a representation of the world would look like in an AI model through the lens of natural systems (animal behavior, collective knowledge and wisdom of crowds, human cognitive science). We didn't solve the questions of representation (or even come particularly close), but we did come up with a framework for defining and assessing what we termed "minimal encodings" that could be applied across fields, from code verification to linguistic models. 

We were interested in how you define transformations from one space to another, and exploring tradeoffs between lossiness and compression. To make it clearer, I'll explain that sentence with an example. If I'm trying to map between the Greek and Roman alphabets, I might have two spaces composed of each script's set of letters. 

I can then define a set of functions tell us how to map between each letter in Greek and one or more of the Roman letters. This won't be a perfect mapping, as the scripts are different: A might map to Alpha, B to Beta, but what about Gamma? Epsilon? Furthermore, what if my Roman letter space is incomplete, and doesn't have enough options for the full Greek alphabet? I could map both Beta and Gamma to B, for example, but this would result in **lossiness** - information lost along the way. Still, I have to make decisions on which mappings to include, which are constrained both by the source data and the space I am mapping *to*.

Fundamentally: all maps are transformations from one space to another, and their creation requires making trade-offs between information fidelity (or lossiness) and compression (the size, or level of detail). I could draw a map of Amsterdam like this:

(Very loose schematic map of Amsterdam)

or like this:

(Detailed map of Amsterdam)

But both would be compressions of the real thing. In his famous short story *On Exactitude in Science*, Jorge Luis Borges describes an empire obsessed with drawing a map as large and detailed as the empire itself. The story reads as satirical, because we know: compression is necessary for understanding. Too much knowledge can be impractical, and "adding detail only gives you more of the same kind of information" (2). 

Remembering something is another kind of mapping. We assign emotional valence to events, which post themselves as landmarks for future recall. It's no coincidence that one of the most common tricks for memorizing large amounts of information is to construct a "memory palace" taking a physical place, ideally with some emotional relevance to you, and mentally wandering throuhg it placing the things you want to memorize in contexts that are surprising, scary, or gross. When memorizing the structure of every amino acid, I decorated my childhood summer camp with the functional groups: cysteine's sulfur ring among the redwoods, asparagine and aspartate on the trail to the mess hall. 

But memory, as we all know, is fallible. It is a tremendously lossy encoding, either because of our perspective or because of the limited sensory input we can process. My strangest example of this is from the summer I spent as an intern at Washington University in St. Lous. Missouri. I had visited the campus once before on a college tour, and when I arrived back, three years later, for the summer, I realized I remembered the layout of the greens and buildings with near-perfect accuracy - except entirely mirrored in my mind. There, in my memory, was the squat 60's library and the Gothic Revival chapel and the chemistry building: all in reverse. I learned fairly quickly to navigate by mirroring my sense of direction to match, but the persistent sense of being "through the looking glass" never left me.

The lossiness of memory is not a simple bug that we should or could aim to remove. Encoding the world requires a massive compression of information. We would not be able to function without our brains manipulating and compressing information from our senses, environment, body, and internal world. So this encoding is necessary, and yet necessarily imperfect. 

(Picture of painting project)

I was interested in exploring these questions through an art piece, so I trained an artificial neural network to reconstruct a particular image and extracted the weights of the neurons in the network (3). These weights encode, via a series of mathematical transformations (like those in our Greek to Roman script example above), the image itself, but not our memories of it. Arranged on the canvas in a 20x20 grid and mapped from numerical values to the original colors of the image ranked by luminance, they present a deliberate strangeness, illegible on first glance. The hand-painted nature of the piece adds an additional layer of infidelity - I can mix only approximations of each color and the grid is in places irregular. 

I also painted a pixelated version of the original image - the input to the network - and the reconstruction, which has a duller color palette as well as additional blur to some of the features of the image.  I wanted to use deep learning to highlight this distance between our present selves and our memories, and show the layers of encoding: from scene, to photo, to embedding, to image, to painting, and back again in memory. The painting process itself requires memory - I interpreted the colors on the screen presented to me by the neural network but can only mix colors with limited fidelity. 

(Mondrian painting; Agnes Callard painting)

I was inspired by Piet Mondrian and Agnes Callard (CHECK), both of whom work with precise linear and geometric forms yet pass these forms through the human neural network to the hand. While Mondrian in particular is known for the digital and modernist nature of his forms, when seen in person his paintings have variability and imperfections: brushstrokes, different tones of white or black. The tension between the human-organic and the artificial, modern, and manufactured feels ever more relevant today when "thinking machines" can increasingly replicate many previously human-only tasks. But what does imperfection in a map give us? And what is lost in remembrance and reconstruction of a particular moment? Even the source photograph has limited resolution and documents only the visual: the smell of summer grass, the wind off the Amstel, the heat from the pavement, the sweat on my back from biking 20 kilometers. 

"All models are wrong, some models are useful", goes the adage. The same can be said for maps. However, I'm not just interested in how my maps are wrong, but how the compression enabled by that loss of information allows me to understand an emotional reality, track changes over time, or peer into the alien inside of a neural network. We must choose what our encodings get right, based on our values and their use. Accepting the emotion, subjectivity, and decisions inherent in any map is one step.

1. Not Just Bikes made a video about this (LINK). I am nothing if not a NJB foamer to my core.
2. For more on this as how it relates to metascience and AI, see Alvin Djadkaderta's essay in Asimov Press (Link). 
3. I won't go into detail about neural networks in this piece, but am happy to delve deeper at a later date if people have specific questions or interests.
### Repeater Season

It feels only appropriate to list some of the songs I listened to while writing this piece. I'm obviously a fan of Eno's Ambient albums (LINK), but I also really enjoy his more recent collaboration with British DJ Fred again (LINK). I also stumbled across this upload of a **Japanese peace-jazz-house jams from the 70s** (Check, LINK) which my cousin's cats enjoyed so much it put them straight to sleep. Not all of these are ambient by a strict definition, but they are at least wordless, and they create a mood that enables the kind of free-associative thinking I wanted to reach.

A few that went on single-song repeat:

**Time's Blur** (Lord Huron) I love Lord Huron for other tracks, but this one has been a sleeper one for me. It's nearly 14 minutes long and like nothing else on *Long Lost.* 

**Dreaming of the Kelly Pool** (Mary Lattimore, Paul Sukeena) I want to emphasize how much this music feels like looking at a spider's web coated in dew. 

**Jacob and the Stone** (Emile Mosseri) Oh, so you want to *cry*. Go on, then, listen to this one, then. It'll be cathartic. 

**Song of Abayi** (Emahoy Tsege Mariam Gebru) I love me some Ethiopian piano jazz on a Sunday. To be consumed with a cup of tea and the morning sun through your stained-glass window.
