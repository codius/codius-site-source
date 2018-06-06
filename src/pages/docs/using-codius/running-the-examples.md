---
title: Running the Examples
section: docs
---

# Installing the CLI

In order to upload programs to Codius hosts, you'll need to install the CLI.

``npm install -g codius``

# Example Applications

Codius has a number of example applications to help you get started, which you can acquire by cloning this repo:

``git clone git://github.com/codius/codius-examples``

## [nginx](https://github.com/codius/codius-examples/blob/master/manifest/nginx-manifest.json)

The first example is a simple nginx server:

* ``cd codius-examples/manifest/``
* ``codius upload ./nginx-manifest.json --host http://local.codius.org:3000``

`local.codius.org` is a domain that currently resolves to `127.0.0.1`, so it will point to your local codius host.

You should get a response that looks something like this:
```
{ url:
   'http://MANIFEST_HASH.local.codius.org:3000/',
  manifestHash: 'oooiikrql23xkjhvc6gobe7vjf5tiprodtmphqnwm7v3vx5g2csq',
  host: 'http://local.codius.org:3000',
  expiry: '2018-06-05T20:52:02.068Z',
  expirationDate: '06-05-2018 1:52:02 -0700',
  expires: 'a few seconds ago',
  pricePaid: '4' }
 ```

Notice the `url` field in the response. You can use this url to query the pod you just launched, and it should return the standard nginx welcome page.