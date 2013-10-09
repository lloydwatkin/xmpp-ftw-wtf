var builder    = require('ltx'),
    Base       = require('xmpp-ftw/lib/base')
    
var Wtf = function() {}

Wtf.prototype = new Base()

Wtf.prototype.handles = function(stanza) {
    return true
}

Wtf.prototype.handle = function(stanza) {
    this.socket.emit('xmpp.wtf.push', stanza.toString())
    return true 
}

module.exports = Wtf