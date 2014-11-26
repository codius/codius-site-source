---
section: docs
---

# Writing a Codius contract

Codius contracts are nothing more than everyday NodeJS packages. The structure
of a contract is fairly straightforward:

* ``contract.js`` - The contract itself
* ``package.json`` - Your everyday package.json, which specifies dependencies
  for npm to install

Codius has a number of example contracts available:

* [Hello, World](http://github.com/codius/example-helloworld)
* [Webserver](http://github.com/codius/example-webserver)
