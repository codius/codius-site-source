---
title: Setting Up Codius CLI
section: docs
---
# Setting up Codius CLI

## Prerequisites

To use the Codius command-line interface (CLI), you need a recent version of Linux.

### Linux

For the example commands below, we assume you're on Ubuntu 14.04 or later. But most up-to-date Linux distributions should work. We definitely recommend being on the latest stable release though.

If you're on Windows/Mac try installing [Vagrant](https://docs.vagrantup.com/v2/installation/index.html) and then run:

``` bash
vagrant init hashicorp/trusty32
vagrant up
```

Congratulations, you are running Ubuntu/Linux! Proceed.

### libc/libstdc++/libseccomp (32-bit)

In case your processor architecture is 64-bit, you have to make sure the 32-bit versions of libc, libstdc++ and libseccomp are installed.

On Ubuntu, simply run:

``` bash
sudo dpkg --add-architecture i386
sudo apt-get install libc6-i386 lib32stdc++6 libseccomp2:i386
```

### Node.js

Next, you need a recent version of [Node.js](https://nodejs.org). All versions of 0.10.x or higher should work.

On Ubuntu, you can install Node.js simply by:

``` bash
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

# Debian package maintainers thought it was a good idea to rename the
# executable, so we need to create a symlink for the correct name.
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
```

## Installation

Alright, now we're ready to install Codius. Go ahead and run:

``` bash
sudo npm install -g codius
```

## Verification

Now let's verify everything installed ok.

``` bash
codius selftest
```
