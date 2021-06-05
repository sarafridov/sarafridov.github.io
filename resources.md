---
title: Resources
feature_text:
    Some (hopefully useful) resources
feature_image: "https://picsum.photos/2560/600?image=873"
excerpt: "resources"
aside: false
---

The following is a list of a few references which I hope will be useful to other young researchers. If you already have something figured out for one of these categories that works for you though, of course take my suggestions with a grain of salt. Also, if you have any suggestions or spot any errors, please do contact me.

## Git

`Git` is a free tool for version control, and it's widely used by folks who develop software. There are a ton of blogs out there with much more extensive descriptions of what's going on under the hood, and this is not meant to be a full `git` tutorial.

Whenever I start a new software-based project, it usually goes in a new repository, which I host on [GitHub](https://github.com/dfridovi). There are several web-based platforms out there for hosting repositories, but GitHub seems to be the most popular one and I've always found it perfectly suitable (and free!). When I'm working on a team, or even sometimes when I'm working by myself, I find it useful to maintain separate branches for different features. I usually work something like this:

1. Sync up with latest `master` (assuming I'm already in `master`):
```bash
git pull
```
2. Start working on a new feature:
```bash
git checkout -b feature/[descriptive-name-of-feature]
```
or sometimes `git checkout -b [git-id]/[descriptive-name-of-feature])`.
3. Work on the feature and remember to use a [good commit message](https://chris.beams.io/posts/git-commit/). Typically this involves repeatedly adding new files (`git add -A`), committing changes (`git commit -am '[commit-msg]'`), and pushing to this branch (`git push origin [branch-name]`).
4. When I'm ready to think about merging, open a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) (PR). I usually like to give the PR a descriptive name, describe what it does briefly and perhaps post a picture of the new output if relevant, and then if I have collaborators add them as reviewers. The whole point of using PRs is to help software development teams stay apprised of what is going on with a repository and to maintain a consistent style. Even if I'm just working by myself I like to use PRs sometimes as a mechanism to self-document the important changes, although of course the code review part of the process is somewhat superfluous.
5. When the PR is ready to merge into master, do so in the GitHub interface (if on a team, then this usually means after one ore more reviewers approve the PR) and delete the branch. Sometimes there will be a merge conflict with master, in which case I checkout master, pull latest changes, checkout my branch, merge with master, and manually fix any merge conflicts. Alternatively, some folks like to rebase on top of master (instead of merging), which can make errors a little nastier but leads to a clean, linear `git` history. The code for merging is as follows:
``` bash
git checkout master
git pull
git checkout [branch-name]
git merge master
```
6. Then, in the terminal, I checkout master again, make sure it's up to date, and then delete the feature branch locally:
```bash
git checkout master
git pull
git branch -d [branch-name]
```

## C++

I'm a C++ enthusiast. I use it for just about every project I work on, and here's why I think you should too. There are a ton of resources online and books and stuff you can check out to learn more. I recommend [Effective C++: 55 Specific Ways to Improve Your Programs and Designs](https://www.amazon.com/Effective-Specific-Improve-Programs-Designs/dp/0321334876/ref=pd_aw_fbt_14_img_2/139-5680242-3340422?_encoding=UTF8&pd_rd_i=0321334876&pd_rd_r=ec88cd99-4b88-4782-8516-36ea950542c2&pd_rd_w=9ikLf&pd_rd_wg=89vkN&pf_rd_p=6e6afc8a-fbbd-4649-97cf-4e08f5113612&pf_rd_r=XXQSFVEH7DWAVCKFB9V9&psc=1&refRID=XXQSFVEH7DWAVCKFB9V9), though admittedly this is more useful if you're already fairly familiar with another compiled language and with some of the basics of C++.

The main reasons to use C++ are threefold:
1. C++ is fast. It's a compiled language, as opposed to Python and Matlab which are interpreted, which means that everything you write in pure C++ (including that for loop is going to get compiled and be executed quickly).
2. C++ is widely used in robotics. Don't believe the folks who tell you otherwise. I remember hearing from a friend who told me that a well-known professor had asked them why they were bothering to learn C++ when Python was so much more useful in industry. Ok. So the deal is this: Python is definitely a great tool for prototyping and it is certainly widely used for developing ML systems. However, it is very slow and that means that most companies with real robots end up developing production code in C++ instead. And that's not even getting into the non-ML components of a company (of which there are usually many) that have absolutely no area-specific attachment to Python. Other folks I've heard ask why not use some other compiled language like Julia. Julia's a great language, but mainly because it's newer I think the reality is just that most companies out there don't use it. So the bottom line is: if you want to lower the "activation energy" for a company to use your research idea, it's best to implement it in a language they probably already use...
3. C++ is convenient. I can't tell you the number of times I've had a friend who's learning C++ complain about how tricky it is. The fact is: like any compiled, object-oriented language, it has a serious learning curve for folks not yet exposed to one of those languages. However, it is really not that hard to pick up (at least functionally) if you are familiar with, say, C or Java. Aside from the dearth of good plotting libraries, C++ can be very quick to develop in and test new ideas. In fact, I usually don't even bother protoyping an idea in Python before testing it out in C++ because it's really just about the same development time for me.

## Emacs

There are a lot of text editors out there, and just about everyone has their favorite. I like emacs, which is a pretty old editor developed for GNU. It's extremely functional and yet minimalist--a significant change from the glitsy IDEs like Sublime and Eclipse that seem to be increasingly popular. My freshman CS professor challenged anyone in the 300+ person class to try to develop faster than he could in emacs, so I figured it must be pretty good. A friend pointed me toward the [Spacemacs](https://www.spacemacs.org) project a while back and I've never looked back.

## LaTeX

LaTeX is a great language for writing text and turning it into PDFs, and it's extremely widely used in academia and particularly in robotics. In fact, I've never heard of anyone in robotics or control who's publishing today who doesn't use LaTeX for preparing conference or journal submissions.

There are many different ways to write and compile LaTeX. Of course you can develop it in any text editor, and compile it in the terminal, but oddly enough this is the one purpose I prefer using an IDE for. I use [Overleaf](https://www.overleaf.com/), an online editor and compiler for LaTeX, and I highly recommend it.

<!-- * [IEEEconf](/assets/latex/ieeeconf.cls) and [IEEEtran](/assets/latex/IEEEtran.cls) are templates used by IEEE conferences and journals. -->
<!-- * A list of common packages is [here](/assets/latex/usepackage.tex) and some useful shortcuts are defined [here](/assets/latex/notation.tex). -->
<!-- * I've also listed some [books](/assets/latex/books.bib) and [papers](/assets/latex/papers.bib) in bibtex format. -->
