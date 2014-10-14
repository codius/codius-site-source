---
section: docs
---
# Prerequisites

## Operating System

To use the Codius command-line interface (CLI), you need a recent version of Linux.

### On Linux

For the example commands below, we assume you're on Ubuntu 14.04. But most up-to-date Linux distributions should work. We definitely recommend being on the latest stable release though.

#### 64-bit

In case your processor architecture is 64-bit, you have to make sure the 32-bit versions of libc and libstdc++ are installed.

On Ubuntu, simply run:

``` sh
sudo apt-get install libc6-i386 lib32stdc++6
```

### On Windows, Mac, etc.

If you're on Windows or Mac, we recommend you install [Vagrant](https://docs.vagrantup.com/v2/installation/index.html) and then run:

``` sh
vagrant init hashicorp/trusty32
vagrant up
```

And now you're on Ubuntu/Linux, proceed!

## Node.js

Next, you need a recent version of [Node.js](https://nodejs.org). All versions of 0.10.x or higher should work.

On Ubuntu, you can install Node.js simply by:

``` sh
sudo apt-get install nodejs npm

# Debian package maintainers thought it was a good idea to rename the
# executable, so we need to create a symlink for the correct name.
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

# Installation

Alright, now we're ready to install Codius. Go ahead and run:

``` sh
sudo npm install -g codius-cli
```

# Verification

Now let's verify everything installed ok.

``` sh
codius selftest
```