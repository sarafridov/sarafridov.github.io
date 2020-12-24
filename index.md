---
title: About me
feature_text: |
  ## David Fridovich-Keil
  I am a postdoc in the Multi-Agent Systems Lab at Stanford. My research involves optimal control, motion planning, and game theory.
feature_image: "https://picsum.photos/1300/400?image=989"
excerpt: "optimal control, motion planning, game theory"
---

{% include figure.html image="/assets/imgs/dalsnibba.jpg" position="right" width="300" height="800" %}

Hi there! I just finished my PhD at UC Berkeley, where I worked on autonomous robotics and optimal control, and was advised by Prof. Claire Tomlin in the [Hybrid Systems Lab](http://hybrid.eecs.berkeley.edu/) and the [Berkeley AI Research Lab](http://bair.berkeley.edu/). During my PhD, I was supported by an NSF Graduate Research Fellowship. I did a short postdoc in the same group, and have now moved to Stanford to postdoc with Prof. Mac Schwager in the [Multi-Agent Systems Lab](https://msl.stanford.edu). I'm excited to be joining the faculty of UT Austin's Department of Aerospace Engineering and Engineering Mechanics in August 2021.

Outside of research, I like to play squash and frisbee, read fantasy novels, and play acoustic guitar.

### Contact info

The best way to reach me is by email, at _david.fridovichkeil_ at _stanford_ dot _edu_

## Research interests

I am generally interested in optimal control, motion planning, and safe autonomy. Please have a look at my [PhD dissertation](/assets/pdfs/phd_dissertation.pdf). So far, I have primarily worked on game-theoretic techniques for motion planning that directly encode robustness to external disturbances and actions of other agents, and operate in real-time. My work so far falls into two main categories: efficient motion planning with reachability-based safety guarantees, and solving large-scale multi-player nonlinear differential games. I have also worked on a number of other projects related to reinforcement learning, distributed control, adaptive receding horizon control, and active search.

### Efficient motion planning with safety guarantees

In motion planning and control, there is often a division between methods that work well in real time, and those that provide strict safety guarantees. For example, iterative LQR (iLQR) is a popular method of generating smooth optimal control sequences in real time for relatively high-dimensional systems; yet iLQR does not guarantee robustness, e.g. against environmental disturbances. By contrast, Hamilton-Jacobi (HJ) reachability can provide hard safety guarantees and disturbance rejection but for general nonlinear systems is only tractable in fairly low dimension.

[FaSTrack](https://arxiv.org/abs/1703.07373) is a new approach that uses an offline reachability computation to inform an online motion planner like iLQR to blend the best of these two types of algorithms. I have worked on several projects extending FaSTrack. In [Planning, Fast and Slow](https://arxiv.org/abs/1710.04731), we broaden the concept of motion planning to allow for multiple different types of planning algorithms (with potentially different notions of state) to run concurrently and stitch together seamlessly while retaining the original FaSTrack safety guarantee. We have also tested a [neural network-based HJ reachability solver](https://arxiv.org/abs/1803.03237) and used it to compute conservative approximations to reachable sets for higher dimensional systems. Finally, I recently built a high-level graph-based wrapper around kinodynamic planners to extend the modular FaSTrack guarantees to a priori unknown environments while retaining [recursive safety and liveness](https://arxiv.org/abs/1811.07834).

### Confidence-aware prediction of another agent's motion

It's always nice to be able to trust that, when a motion planner says the system remains safe we can trust that, at runtime, the system will actually remain safe despite potential modeling errors. That's precisely why studying robust control is important. However, an autonomous system might also encounter other moving agents at runtime, and when this happens the system has to make some assumptions on how they might behave. Unfortunately, any model we might construct to predict the motion of these other agents will, in general, fail systematically in some situations; to be robust to this inevitability, we proposed a novel Bayesian framework for inferring our model confidence and dynamically adjusting predictions online to be more conservative whenever model confidence drops. We took a first step toward incorporating uncertain predictions of a pedestrian into FaSTrack in a recent paper at [RSS 2018](https://arxiv.org/abs/1806.00109) and extended at [IJRR](https://journals.sagepub.com/doi/pdf/10.1177/0278364919859436), and we recently extended this approach to work with multiple pedestrians and multiple robots.

### Solving large multi-player nonlinear differential games _in real time_

Differential games are a widely-applicable mathematical tool, and offer an attractive alternative to traditional formulations of motion planning problems. In particular, motion planning problems are often posed in either static environments or dynamic environments where the predicted motion of other agents is completely independent from the robot's planned trajectory. Unfortunately, this can put an undue burden on the predictive model to be precise despite enormous uncertainty. Differential game theory offers an exciting alternative; rather than fix a prediction beforehand, we can presume that other agents are optimizing some _known_ (or estimated) objectives, and solve a differential game to find _a local equilibrium_. Effectively coupling prediction and planning, this approach shifts the enormous burden of making accurate predictions to the potentially more straightforward task of modeling short-term dynamic objectives.

Until relatively recently, differential games were widely considered to be computationally intractible for general nonlinear systems and multiple players with arbitrary objectives. Several approximation techniques have been explored in the literature, but to my knowledge none have been seriously considered in the industry. [My own work](https://arxiv.org/pdf/1909.04694) in this area consists of a fast second-order solver based on iterative LQR--a standard algorithm for nonlinear MPC used in the autonomous vehicle industry. I recently developed (and continue to contribute to) a real-time C++ implementation, available [open-source](https://hjreachability.github.io/ilqgames/). This solver has been tested in simulation, in hardware in the lab, and onboard a full-scale Boeing experimental aircraft.
