---
title: Architecture
section: docs
---

# Architecture

Codius fits into the middle tier of the standard three-tier architecture:

![Codius 3-Tier Architecture](/assets/img/docs/three-tier-architecture.png)

Previously, most distributed applications in the cryptocurrency community were written in such a way that clients interacted directly with ledgers/blockchains (databases). However, oftentimes applications need to interact with multiple clients, multiple ledgers/blockchains and other Internet services. An application logic layer is the ideal place to host such functionality.

# How Codius works

Codius is a hosting platform. We generally distinguish two roles:

* **Codius Hosts** are companies or individuals who are looking to earn money by operating servers to host other people's applications. They use several components ([`receipt-verifier`](https://github.com/coilhq/receipt-verifier), [`codius-operator`](https://github.com/codius/codius-operator) and [`codius-web`](https://github.com/codius/codius-web)) in a Kubernetes cluster in order to accept [Interledger](https://interledger.org) payments and provide the necessary APIs for uploading apps. `codius-operator` also creates a [pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/) and the necessary amount of [containers](https://www.docker.com/what-container).

* **Developers** create applications and deploy them to a Codius host. They use the Codius host's [`web page`](https://github.com/codius/codius-web) to upload apps to the host's Kubernetes cluster. The upload is accomplished via a [manifest](https://godoc.org/github.com/codius/codius-operator/servers#Services) that describes information about the program such as its environment variables and Docker image to pull. (Images are pulled from [Docker Hub](https://hub.docker.com/) by default.)

By default, [ `codius-operator`](https://github.com/codius/codius-operator) utilizes [`Kata Containers`](https://katacontainers.io/) in order to run applications isolated from each other and from the outside world.
