var should = require('should')
  , Wtf = require('../../index')
  , ltx    = require('ltx')
  , helper = require('../helper')

describe('Wtf', function() {

    var wtf, socket, xmpp, manager

    before(function() {
        socket = new helper.Eventer()
        xmpp = new helper.Eventer()
        manager = {
            socket: socket,
            client: xmpp,
            trackId: function(id, callback) {
                this.callback = callback
            },
            makeCallback: function(error, data) {
                this.callback(error, data)
            }
        }
        wtf = new Wtf()
        wtf.init(manager)
    })

    describe('Handles', function() {

        it('Returns true for any stanza', function() {
            wtf.handles(ltx.parse('<iq/>')).should.be.true
        })

    })

    it('Handles incoming messages', function(done) {
        var unknownStanza = helper.getStanza('unknown-stanza')

        socket.on('xmpp.wtf.push', function(stanza) {
            stanza.should.equal(unknownStanza.toString())
            done()
        })
        wtf.handle(unknownStanza).should.be.true

    })

})