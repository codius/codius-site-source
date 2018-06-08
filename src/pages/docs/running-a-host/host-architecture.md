---
title: Codius Host Architecture
section: docs
---

# Codius Host Architecture
A Codius host is comprised of several components that allows it to perform its duties of hosting code in an isloated manner, and send and receive payments through itself and through the individual services that it is hosting. The main roles a Codius host plays is to create a space where each program that is uploaded can live, send and receive payments for itself and on behalf of any programs it is running in its pods, and to broadcast itself to the rest of the Codius network while building its own library of known Codius nodes.

## Hosting
The main function of the Codius host is to create a place to run uploaded code, and then proxy connections to the uploaded code through itself. A host receives uploaded code in the form of a [manifest](https://github.com/codius/codius-manifest). The manifest contains information about the code such as its name, version, Docker Image, and environment variables. In addition to the manifest, the host also receives information on how long the uploader wishes to run the code and the necessary payment. The host then generates a hash from the uploaded manifest and converting it into what is called a pod spec. The hash is used to identify the manifest to the host and by extension, the outside world. The pod spec is passed to hyperd, which codiusd talks to in order to manage pods.

### Pods
A [pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/) creates a small hardware-isolated unit of computing that groups together [containers](https://www.docker.com/what-container) within it. Containers that share a pod all share the same network, kernel, and storage, but are otherwise isolated from each other. A manifest file can describe multiple containers to be run in the pod that the Codius Host provisions for it.

The pod is identified by the Codius host with the manifest hash, which is generated from the manifest itself. A pod can then have its runtime extended with queries using that hash to designate it to the host. The host also uses this hash to make its associated pod accessible by generating a URI of the format `MANIFEST_HASH.CODIUS_HOST_URI`. Using this URI, the host proxies requests on it to the designated pod.

Pods are able to connect to the Interledger for payments by way of the Codius host exposing a port in the Pod's network, which passes data on that port to the Codius Host's own Interledger connection.

### Payments
Codius uses [Interledger](https://interledger.org) to handle payments, implementing it by running the daemon [moneyd](https://github.com/interledgerjs/moneyd). It then extends payment functionality into its pods by exposing a port in each of them, which connects them to the Interledger network as well. With Interledger, a Codius host can accept payments to host programs, and any programs that are uploaded to the host that contain a contract can handle payments over Interledger.

### Peers
To aid in creating distributed applications, Codius hosts maintain a list of other Codius nodes on the network that is updated as new Codius hosts go live. They also broadcast themselves so that other hosts become aware of them.