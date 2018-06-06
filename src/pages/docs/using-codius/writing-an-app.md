---
title: Writing a Codius Application
section: docs
---

# Writing a Codius application

Codius applications are nothing more than everyday NodeJS packages. The structure
of an applicatoin is fairly straightforward:

* A [manifest](https://github.com/coilhq/codius-manifest) describing basic information about your program, such as name, verison, image, and its environment variables.

The main component from which your program will be sourced is a Docker image, the path to which can be found in the `manifest` object in a field called `image`. By default, the image is pulled from Dockerhub.

Codius also has a number of [example applications](running-the-examples) available.
