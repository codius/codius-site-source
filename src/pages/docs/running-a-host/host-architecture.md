---
title: Codius Host Architecture
section: docs
---

# Codius Host Architecture
A Codius host is comprised of several components that allows it to perform its duties of hosting code in an isolated manner. The main roles a Codius host plays is to create a space where each program that is uploaded can live and to receive payments.

## Hosting
The main function of the Codius host is to create a place to run uploaded code, and then proxy connections to the uploaded code through itself. A host receives uploaded code in the form of a [manifest](https://godoc.org/github.com/codius/codius-operator/servers#Service). The manifest contains information about the code such as its Docker image and environment variables. The host generates a hash from the uploaded manifest. The hash is used to identify the manifest to the host and by extension, the outside world. The manifest defines a Kubernetes [custom resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) which the [codius-operator](https://github.com/codius/codius-operator) uses to manage pods.

### Pods
A [pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/) creates a small hardware-isolated unit of computing that groups together [containers](https://www.docker.com/what-container) within it. Containers that share a pod all share the same network, kernel, and storage, but are otherwise isolated from each other. A manifest file can describe multiple containers to be run in the pod that the Codius Host provisions for it.

The pod is identified by the Codius host with the manifest name. A pod can have its runtime extended with queries using that name to designate it to the host. The host makes its associated pod accessible by generating a URI of the format `MANIFEST_NAME.CODIUS_HOST_URI`. Using this URI, the host proxies requests on it to the designated pod.

### Payments
A Codius host uses [Interledger](https://interledger.org) to accept payments to host programs.
