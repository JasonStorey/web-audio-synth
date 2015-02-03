describe('System', function() {
    var AudioContextConstructor,
        audioContext,
        ERROR,
        system,
        GainConstructor,
        gain;

    beforeEach(function() {
        audioContext = {destination: 'mockDestination'};
        AudioContextConstructor = sinon.stub().returns(audioContext);
        ERROR = {};
        gain = {
            getAudioNode: sinon.stub(),
            connect: sinon.stub()
        };
        GainConstructor = sinon.stub().returns(gain);

        system = proxyquire(SRC_DIR + '/audio/system', {
            './audio-context': AudioContextConstructor,
            '../utils/error': ERROR,
            './gain': GainConstructor
        });
    });

    it('init should construct an AudioContext and connect a master Gain node', function() {
        system.init();
        expect(AudioContextConstructor).to.have.been.calledOnce.calledWithNew;
        expect(GainConstructor).to.have.been.calledOnce.calledWithNew;
        expect(gain.connect).to.have.been.calledWith(audioContext.destination);
    });

    it('getAudioContext should return the AudioContext instance when system is initialised', function() {
        system.init();
        expect(system.getAudioContext()).to.equal(audioContext);
        expect(AudioContextConstructor).to.have.been.calledOnce;
    });

    it('getAudioContext should throw a setup error when system is not initialised', function() {
        expect(system.getAudioContext).to.throw(ERROR.SETUP_ERROR);
    });

    it('getOutput should return a master gain node when system is initialised', function() {
        var mockAudioNode = 'an audio node';
        gain.getAudioNode.returns(mockAudioNode);
        system.init();
        expect(system.getOutput()).to.equal(mockAudioNode);
    });

    it('getOutput should throw a setup error when when system is not initialised', function() {
        expect(system.getOutput).to.throw(ERROR.SETUP_ERROR);
    });
});