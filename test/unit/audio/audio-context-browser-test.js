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
    });

    it('constructor should throw an unsupported feature error when no window AudioContext is available', function() {
        expect(function() {new AudioContext()}).to.throw(ERROR.UNSUPPORTED_FEATURE);
    });

    it('constructor should create new window.AudioContext when defined', function() {
        window.AudioContext = sinon.stub();
        var audioContext = new AudioContext();
        expect(window.AudioContext).to.have.been.calledWithNew;
        expect(audioContext._audioContext).to.be.an.instanceof(window.AudioContext);
    });

    it('constructor should create new window.webkitAudioContext when window.AudioContext is not defined', function() {
        window.webkitAudioContext = sinon.stub();
        var audioContext = new AudioContext();
        expect(window.webkitAudioContext).to.have.been.calledWithNew;
        expect(audioContext._audioContext).to.be.an.instanceof(window.webkitAudioContext);
    });
});