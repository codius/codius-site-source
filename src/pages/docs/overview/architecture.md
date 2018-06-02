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

* **Codius Hosts** are companies or individuals who are looking to earn money by operating servers to host other people's applications. They use [`codiusd`](https://github.com/coilhq/codiusd) in order to provide the necessary APIs for uploading apps.

* **Developers** create applications and deploy them on top of Codius. They use [`codius-cli`](https://github.com/coilhq/codius-cli) to locally test, package and upload apps.

[ `codius-host`](https://github.com/coilhq/codisud) utilizes [`hyperd`](https://github.com/hyperhq/hyperd) in order to run applications isolated from each other and from the outside world.

![Architecture Diagram](/assets/img/docs/architecture-overview.png)
