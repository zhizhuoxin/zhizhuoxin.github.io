---
title: "Thermometer"
tags:
  - "cpu"
  - "optimization"
date: 2021-08-12
authors:
  - name: "Shixin Song"
    url: "/"
  - name: "Tanvir Ahmed Khan"
    url: "https://web.eecs.umich.edu/~takh/"
  - name: "Akshitha Sriraman"
    url: "https://akshithasriraman.eecs.umich.edu/"
  - name: "Niranjan K Soundararajan"
  - name: "Sreenivas Subramoney"
  - name: "Heiner Litz"
    url: "https://people.ucsc.edu/~hlitz/"
  - name: "Baris Kasikci"
    url: "https://web.eecs.umich.edu/~barisk/"
path: "research/thermometer"
excerpt: Data center processors use fetch-directed instruction prefetching to efficiently operate on large instruction footprints of modern data center applications. However, the instruction prefetching mechanism falls significantly short from the ideal performance behavior due to a large number of Branch Target Buffer (BTB) misses. In our research, we show that the existing BTB replacement mechanisms could not identify the wide variance in the branch access pattern of modern data center applications. To address this limitation, we propose Thermometer, a novel BTB replacement mechanism that leverages hardware-software codesign to distinguish different branch access behavior. By making close-to-optimal BTB replacement decisions, Thermometer achieves an average performance speedup of 8.8% and up to 64.9% for nine widely-used data center applications.
selected: true
cover: "./thermometer.png"
priority: 20
---
