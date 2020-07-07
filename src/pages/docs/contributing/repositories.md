---
title: Repositories
section: docs
---

# Codius Repositories

Third-party patches are a great way to contribute to Codius. We simply can't
access the huge number of platforms and configurations that Codius runs in. Our
goal is to keep it as easy as possible to contribute changes that get things
working in your environment. There are a few guidelines that we need
contributors to follow so that we can have a chance of keeping on top of things.


## Getting Started

Codius is made up of the following major repositories:

* [codius-operator](https://github.com/codius/codius-operator)
* [codius-web](https://github.com/codius/codius-web)
* [codius-auth](https://github.com/codius/codius-auth)

## Making Changes

* Make sure you've got a [GitHub account](https://github.com/signup/free)
* Submit a ticket for your issue to the appropriate repository
* Fork the repository on GitHub
* Create a topic branch from where you want to base your work
  * This is usually master.
  * Only target a release branch if you are certain that your fix must be there
  * To quickly create a topic branch based on master; ``git checkout -b
  fix/master/my_contribution master``
* Make commits of logical units; feel free to rearrange and squash commits as
  needed
* Check for unnecessary whitespace with ``git diff --check`` before committing
* Make sure you have added the necessary tests for your changes
* Run all the tests to assure that nothing else was broken

## Submitting Changes
* Push your changes to a topic branch in your fork of the repository
* Submit a pull request to the repository in the Codius organization
* The team looks at pull requests on a regular basis
* After feedback is given, we expect responses within two weeks. After two weeks
  we may close the pull request if it isn't showing any activity.

## Contributing to the FAQ

Some common nuances of Codius and its related software are too minor to warrant their own document, but are still valuable pieces of information. If you have some information to contribute, make your contributions and open a pull request [here](https://github.com/codius/codius-wiki).

## Additional Resources

* [General GitHub documentation](https://help.github.com)
* [GitHub pull request documentation](https://help.github.com/send-pull-requests)
* [Codius Wiki](https://github.com/codius/codiusd/wiki)