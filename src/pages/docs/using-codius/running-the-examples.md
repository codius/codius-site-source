---
title: Running the Examples
section: docs
---

# Installing the CLI

In order to upload programs to Codius hosts, you'll need to install the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLI.

# Pay the Codius Host

Navigate to the Codius host in a web browser with a [Web Monetization](https://webmonetization.org/) provider enabled, and note the token.

# Example Applications

Codius has a number of example applications to help you get started, which you can acquire by cloning this repo:

``git clone git://github.com/codius/codius-examples``

## [nginx](https://github.com/codius/codius-examples/blob/master/nginx.yaml)

The first example is a simple nginx server:

* ``cd codius-examples/``
* ``KUBECONFIG=none kubectl create -f ./nginx.yaml -s https://<your-codius-host>.com --token="<your-token>"``

You should get a response that looks something like this:
```
service.core.codius.org/nginx-codius-pod created
 ```

If you get the following error, you can change the file's `metadata.name` field and retry:
```
Error from server (AlreadyExists): error when creating "nginx.yaml": services.core.codius.org "nginx-codius-pod" already exists
```

Notice the `nginx-codius-pod` in the response. You can use this as a subdomain on the host to query the pod you just launched (`https://nginx-codius-pod.example-host.com`), and it should return the standard nginx welcome page.

## [create-react-app](https://github.com/codius/codius-examples/blob/master/react-app.yaml)

Another available example pod launches the bootstrap React App, [create-react-app](https://github.com/codius/examples/blob/master/react-app.yaml)

* ``cd codius-examples/``
* ``KUBECONFIG=none kubectl create -f ./react-app.yaml -s https://<your-codius-host>.com --token="<your-token>"``

As before, you should get a similar response:

```
service.core.codius.org/my-codius-create-react-app created
```
