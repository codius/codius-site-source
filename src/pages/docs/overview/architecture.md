---
section: docs
---

# Architecture

Codius is a hosting platform and accompagnying client. We generally distinguish two roles:

* **Codius Hosts** are companies or individuals who are looking to earn money by operating servers to host other people's applications. They use [`codius-host`](https://github.com/codius/host) in order to provide the necessary APIs for uploading apps.

* **Developers** create applications and deploy them on top of Codius. They use [`codius-cli`](https://github.com/codius/cli) to locally test, package and upload apps.

Both [`codius-cli`](https://github.com/codius/cli) and [`codius-host`](https://github.com/codius/host) utilize [`codius-engine`](https://github.com/codius/engine) in order to run contracts isolated from each other and from the outside world.

![Architecture Diagram](/assets/img/docs/architecture-overview.png)
