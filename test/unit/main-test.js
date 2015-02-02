describe('Main', function() {
    var system = {},
        WebAudioSynth = proxyquire(SRC_DIR + '/main', {'./audio/system': system });

    it('should initialise system', function() {
        sinon.stub(system, 'init');
        WebAudioSynth.init();
        expect(system.init).to.have.been.calledOnce;
    });
});