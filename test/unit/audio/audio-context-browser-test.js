describe('AudioContextBrowser', function() {
    var window,
        AudioContext,
        ERROR;

    beforeEach(function() {
        window = {};
        ERROR = {};
        AudioContext = proxyquire(SRC_DIR + '/audio/audio-context-browser', {
            '../utils/window': window,
            '../utils/error': ERROR
        });

        window.AudioContext = sinon.stub();
        window.webkitAudioContext = sinon.stub();
    });

    describe('constructor', function() {
        it('throws an unsupported feature error when no window AudioContext is available', function() {
            window.AudioContext = undefined;
            window.webkitAudioContext = undefined;

            expect(function() {new AudioContext()}).to.throw(ERROR.UNSUPPORTED_FEATURE);
        });

        it('creates new window.AudioContext when defined', function() {
            window.webkitAudioContext = undefined;

            var audioContext = new AudioContext();
            expect(window.AudioContext).to.have.been.calledWithNew;
            expect(audioContext._audioContext).to.be.an.instanceof(window.AudioContext);
        });

        it('creates new window.webkitAudioContext when window.AudioContext is not defined', function() {
            window.AudioContext = undefined;

            var audioContext = new AudioContext();
            expect(window.webkitAudioContext).to.have.been.calledWithNew;
            expect(audioContext._audioContext).to.be.an.instanceof(window.webkitAudioContext);
        });

        it('sets destination as window.AudioContext', function() {
            var expectedOutput = 'an audio output',
                audioContext;

            window.AudioContext.returns({
                destination: expectedOutput
            });

            audioContext = new AudioContext();
            expect(audioContext.destination).to.equal(expectedOutput);
        });
    });

    it('implements createGain method', function() {
        var expectedGainNode = 'a gain node',
            audioContext,
            gainNode;

        window.AudioContext.returns({
            createGain: sinon.stub().returns(expectedGainNode)
        });

        audioContext = new AudioContext();
        gainNode = audioContext.createGain();

        expect(gainNode).to.equal(expectedGainNode);
    });
});