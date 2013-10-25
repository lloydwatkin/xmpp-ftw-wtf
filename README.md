xmpp-ftw-wtf
=================

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
