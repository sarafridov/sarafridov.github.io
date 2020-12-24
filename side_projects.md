---
title: Side Projects
feature_text:
    Random side projects
feature_image: "https://picsum.photos/2560/600?image=873"
excerpt: "side projects"
aside: false
---

Sometimes I have a idea that I want to try out, so I just start up a new git repository... and months later I'm still working on it. Here's a short list of some of the highlights. For a complete list, check out my [git profile](https://github.com/dfridovi).

## FaSTrack

[FaSTrack] (https://arxiv.org/abs/1703.07373) (Fast and Safe Tracking) is a new approach to real time trajectory planning that preserves a modular safety guarantee. I've also worked on several extensions to it, e.g. [meta-planning](https://arxiv.org/abs/1710.04731) but in the process I decided to go ahead and build a nice, clean, open-source [ROS implementation](https://github.com/HJReachability/meta_fastrack) of the original version. Be warned... it may or may not abuse C++ templates.

## Dumbo

I've been playing chess since I was in kindergarten, and back in elementary school I used to play competitively. I started getting back into chess a couple years ago and got my rating back up to about 1750, so I thought it would be fun to make a chess engine.... but that turned out to be a bit more work than I expected. So instead, I built [dumbo](https://dfridovi.github.io/dumbo/), which is an abstract, templated C++ library implementation of Monte Carlo Tree Search (and a cool little tic tac toe demo). Check it out if you like!

## Mininet

Early in grad school, I realized that I was going to lots of deep learning-related talks and sitting next to a lot of folks who use neural nets all the time, and yet I'd never actually played with them myself. So I built [mininet](https://dfridovi.github.io/mininet/), which is a lightweight C++ library for deep learning. Currently, it only supports simple, feed-forward networks, but hey, if you'd like add more functionality please do submit a PR.

## Reinforcement Learning

Reinforcement learning is a pretty hot area of robotics research these days, so I thought should learn a bit about it and try out some of the classic algorithms myself. [rl](https://dfridovi.github.io/rl/) is a templated, abstract C++ library for reinforcement learning.

## Gaussian Processes

Another popular tool in robotics research these days is the Gaussian Process framework for function approximation. [gp](https://dfridovi.github.io/gp/) is a lightweight C++ library for Gaussian Processes.
