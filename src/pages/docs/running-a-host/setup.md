---
title: Setting Up a Codius Host
section: docs
---
# Setting up a Codius host

Codius hosts run contracts and provide them with APIs that allow for key generation, interaction with outside systems and lots more! Please keep in mind that is an early prototype and it's still missing a lot of functionality for it to be secure, stable and useful.

## Installation
Use the following commands to install the host:

``` sh
git clone git@github.com:codius/codius-host.git
cd codius-host
npm install
```

## Certificate
Before you can run the host, you will need an SSL certificate. For testing, you can generate a self-signed certificate using OpenSSL:

``` sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

## Running the host
To start running the host, use the command:

``` sh
node app
```

Once the host is running, you can interact with it using the [Codius CLI](../using-codius/setup-cli.md).

You will be able to run a contract on your host with:

``` sh
cd your-contract-directory
CODIUS_HOST=https://your-host-name.com:2633 codius upload
```

## Local hostname

In order to use a local Codius host, you need to redirect requests like abcabc-abcabc-abcabc.example.com to your local host. Unfortunately, `/etc/hosts` does not allow you to specify wildcard hosts.

On Ubuntu, an easy way to get around this problem is using `dnsmasq`.

``` sh
sudo apt-get install dnsmasq
echo 'address=/localcodius/127.0.0.1' | sudo tee --append /etc/dnsmasq.conf
sudo /etc/init.d/dnsmasq restart
```

You will be able to access local contracts using URLs like https://abcabc-abcabc-abcabc.localcodius:2633.
