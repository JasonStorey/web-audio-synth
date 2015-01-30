describe('System', function() {
    var AudioContext,
        ERROR,
        system;

    beforeEach(function() {
        AudioContext = sinon.stub();
        ERROR = {};
        system = proxyquire(SRC_DIR + '/audio/system', {
            './audio-context': AudioContext,
            '/utils/error': ERROR
        });
    });

    it('init should construct an AudioContext', function() {
        system.init();
        expect(AudioContext).to.have.been.calledOnce.calledWithNew;
    });

    it('getAudioContext should return the AudioContext instance when system is initialised', function() {
        system.init();
        expect(system.getAudioContext()).to.be.an.instanceof(AudioContext);
        expect(AudioContext).to.have.been.calledOnce;
    });

    it('getAudioContext should throw a setup error when system is not initialised', function() {
        expect(system.getAudioContext).to.throw(ERROR.SETUP_ERROR);
    });

    it('getOutput should return an audio destination node when system is initialised', function() {
        var destination = 'AudioDestinationNode';
        AudioContext.returns({
            destination: destination
        });

        system.init();
        expect(system.getOutput()).to.equal(destination);
    });

    it('getOutput should throw a setup error when when system is not initialised', function() {
        expect(system.getOutput).to.throw(ERROR.SETUP_ERROR);
    });
});