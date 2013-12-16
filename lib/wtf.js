'use strict';

var Base = require('xmpp-ftw').Base

var Wtf = function() {}

Wtf.prototype = new Base()

Wtf.prototype.handles = function() {
    return true
}

Wtf.prototype.handle = function(stanza) {
    this.socket.emit('xmpp.wtf.push', stanza.toString())
    return true
}

module.exports = Wtf