---
title: Who Should Run a Host?
section: docs
---
# Who should run a host?

Running a Codius host means being in the hosting business. You should do it, if you believe that you'll be able to do it well and outcompete others who do the same thing.

# Earning money

The payments component of a Codius host, [Moneyd](https://github.com/interledgerjs/moneyd) supports XRP billing right out of the box. Additionally, developers can build custom billing modules to allow alternate payment methods. Codius billing is resource-driven, you should see a very strong correlation between the load on your servers (and the number of servers required) and the amount of money earned.

# Setup costs

To get started running a Codius host, you will need at least one server and a wildcard SSL certificate. We recommend a physical server over cloud hosting, because you have better control over the hardware which is important when optimizing for the performance characteristics.
