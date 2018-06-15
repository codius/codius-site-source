---
title: Architecture
section: docs
---

# Architecture

Codius fits into the middle tier of the standard three-tier architecture:

![Codius 3-Tier Architecture](/assets/img/docs/three-tier-architecture.png)

Previously, most distributed applications in the cryptocurrency community were written in such a way that clients interacted directly with ledgers/blockchains (databases). However, oftentimes applications need to interact with multiple clients, multiple ledgers/blockchains and other Internet services. An application logic layer is the ideal place to host such functionality.

# How Codius works

Codius is a hosting platform and accompanying client. We generally distinguish two roles:

* **Codius Hosts** are companies or individuals who are looking to earn money by operating servers to host other people's applications. They use [`codiusd`](https://github.com/codius/codiusd) in order to provide the necessary APIs for uploading apps. `codiusd` also creates a [pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/) and the necessary amount of [containers](https://www.docker.com/what-container). These pods are granted access to a [moneyd](https://github.com/interledgerjs/moneyd) instance that allows both the host and its pods to send and receive payments over [Interledger](https://interledger.org).

* **Developers** create applications and deploy them on top of Codius. They use [`codius`](https://github.com/codius/codius) to upload apps. The upload is accomplished via a [manifest](https://github.com/codius/codius-manifest) that describes information about the program such as its name, version, environment variables, and a Docker image to pull. (Images are pulled from Dockerhub by default.)

[ `codiusd`](https://github.com/codius/codisud) utilizes [`hyperd`](https://github.com/hyperhq/hyperd) in order to run applications isolated from each other and from the outside world.

![Architecture Diagram](/assets/img/docs/architecture-overview.png)
