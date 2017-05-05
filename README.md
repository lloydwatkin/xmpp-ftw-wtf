xmpp-ftw-wtf
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/xmpp-ftw/xmpp-ftw-wtf.svg)](https://greenkeeper.io/)

Unknown incoming stanza plugin for XMPP-FTW.

https://github.com/xmpp-ftw/xmpp-ftw.git

If XMPP-FTW receives a stanza which can not be handled by any of the 
other installed listeners then this plugin will simply push the 
stanza (converted to a string) via the `<em>xmpp.wtf.push</em>` 
event.

# More....

See the XMPP-FTW demo repository - https://github.com/xmpp-ftw/xmpp-ftw-demo

# Build status

[![Build Status](https://secure.travis-ci.org/xmpp-ftw/xmpp-ftw-wtf.png)](http://travis-ci.org/xmpp-ftw/xmpp-ftw-wtf)
[![Dependency Status](https://david-dm.org/xmpp-ftw/xmpp-ftw-wtf.png)](https://david-dm.org/xmpp-ftw/xmpp-ftw-wtf)
[![Coverage Status](https://img.shields.io/coveralls/xmpp-ftw/xmpp-ftw-wtf.svg)](https://coveralls.io/r/xmpp-ftw/xmpp-ftw-wtf?branch=master

# Install

```
npm i --save xmpp-ftw-wtf
```

# Test

```
npm test
```

# Notes

Yes this plugin is mostly a joke!
