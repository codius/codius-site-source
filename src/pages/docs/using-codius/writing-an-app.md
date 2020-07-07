---
title: Writing a Codius Application
section: docs
---

# Writing a Codius application

Codius applications are nothing more than everyday NodeJS packages. The structure
of an application is fairly straightforward:

* A [manifest](https://godoc.org/github.com/codius/codius-crd-operator/api/v1alpha1#Service) describing basic information about your program, such as name, version, image, and its environment variables.

The main component from which your program will be sourced is a Docker image, the path to which can be found in the `containers` object(s) in a field called `image`. By default, the image is pulled from [Docker Hub](https://hub.docker.com/).

Codius also has a number of [example applications](running-the-examples) available.
