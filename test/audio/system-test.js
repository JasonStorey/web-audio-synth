describe('System', function() {
    var AudioContext,
        ERROR,
        system;

    beforeEach(function() {
        AudioContext = sinon.stub();
        ERROR = {};
        system = proxyquire(SRC_DIR + '/audio/system', {
            './audio-context': AudioContext,
            '../utils/error': ERROR
        });
    });

    it('init should construct an AudioContext', function() {
        system.init();
        expect(AudioContext).to.have.been.calledOnce.calledWithNew;
    });

    it('getOutput should return an audio destination node when initialised', function() {
        var destination = 'AudioDestinationNode';
        AudioContext.returns({
            destination: destination
        });

        system.init();
        expect(system.getOutput()).to.equal(destination);
    });

    it('getOutput should throw a setup error when not initialised', function() {
        expect(system.getOutput).to.throw(ERROR.SETUP_ERROR);
    });
});