---
title: About me
feature_text: |
  ## David Fridovich-Keil
  I am an assistant professor at the University of Texas, Austin, in the Department of Aerospace Engineering and Engineering Mechanics. My research involves optimal control, dynamic game theory, and learning for robust autonomy.
feature_image: "https://picsum.photos/1300/400?image=989"
excerpt: "optimal control, dynamic game theory, learning for robust autonomy"
---

{% include figure.html image="/assets/imgs/dalsnibba.jpg" position="right" width="300" height="800" %}

Hi there! I am an incoming assistant professor at UT Austin's Department of Aerospace Engineering and Engineering Mechanics. I recently finished my PhD at UC Berkeley, where I worked on autonomous robotics and optimal control, and was advised by Prof. Claire Tomlin in the [Hybrid Systems Lab](http://hybrid.eecs.berkeley.edu/) and the [Berkeley AI Research Lab](http://bair.berkeley.edu/). During my PhD, I was supported by an NSF Graduate Research Fellowship. I did a short postdoc in the same group, followed by a year at Stanford working with Prof. Mac Schwager in the [Multi-Agent Systems Lab](https://msl.stanford.edu).

Outside of research, I like to hike, play disc golf, read fantasy novels, and practice acoustic guitar.

### Contact info

The best way to reach me is by email, at `dfk at utexas dot edu`

## Research interests

I am generally interested in optimal control, dynamic games, learning for control, and robot safety. Please have a look at my [PhD dissertation](/assets/pdfs/phd_dissertation.pdf). While I have also worked on a number of other projects related to distributed control, reinforcement learning, and active search, some my current research interests are:

* Posing interactive motion planning problems as multi-player, noncooperative dynamic games and designing efficient algorithms to solve them
* Inferring properties of game-theoretic interactions, such as equilibrium type, player objectives, and constraints
* Building a rapprochement between machine learning methods and classical techniques for robust, adaptive, and geometric control

## News

_(July 2021)_ I recently gave an invited talk at the [RSS 2021 Workshop on Perception and Control for Autonomous Navigation in Crowded, Dynamic Environments](https://negarmehr.github.io/RSS2021Workshop/). The talk aims to deliver a brief tutorial on (a) what dynamic games are, (b) why they are a good model for multi-agent interactions, (c) how to solve them efficiently, and (d) some of the mathematical subtlety underlying dynamic games. If you check out the earlier recorded talks in the workshop, you'll also notice that the iterative method for solving dynamic Nash games developed in my PhD thesis bears a striking resemblance to contemporaneous, [independent work going on at Waymo Research](https://youtu.be/T_LkNm3oXdE?t=640).

{% include video.html id="EmrReoNQP3s?t=1437" title="RSS 2021 Workshop Talk" %}

<!-- ### Interaction as a game -->

<!-- Dynamic games are a widely-applicable mathematical tool, and offer an attractive alternative to traditional formulations of motion planning problems. In particular, motion planning problems are often posed in either static environments or dynamic environments where the predicted motion of other agents is completely independent from the robot's planned trajectory. Unfortunately, this can put an undue burden on the predictive model to be precise despite enormous uncertainty. Dynamic game theory offers an exciting alternative; rather than fix a prediction beforehand, we can presume that other agents are optimizing some _known_ objectives, and solve a dynamic game to find _a local equilibrium_. Effectively coupling prediction and planning, this approach shifts the enormous burden of making accurate predictions to the potentially more straightforward task of modeling short-term dynamic objectives. -->

<!-- Until relatively recently, dynamic games were widely considered to be computationally intractible for general nonlinear systems and multiple players with arbitrary objectives. Several approximation techniques have been explored in the literature, but to my knowledge none have been seriously considered in the industry. [My own work](https://arxiv.org/pdf/1909.04694) in this area consists of a fast second-order solver which bears resemblance to iterative LQR--a standard algorithm for nonlinear model-predictive control used in the autonomous vehicle industry. I recently developed a real-time C++ implementation, available [open-source](https://hjreachability.github.io/ilqgames/). This solver has been tested in simulation, in hardware in the lab, and onboard a full-scale Boeing experimental aircraft. -->

<!-- ### Inferring properties of dynamic games -->

<!-- Perhaps the most straightforward limitation of game-theoretic interaction models is that they presume _a priori_ knowledge of all players' objectives. Moreover, they typically also have multiple equilibria which encode significantly different outcomes. To use games effectively in uncertain situations, it is critical to be able to infer these properties from noisy, partial observations of players' activity in real-time.  -->
