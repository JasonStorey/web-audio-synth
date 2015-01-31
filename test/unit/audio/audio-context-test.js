describe('AudioContext', function() {
    var ERROR = {},
        AudioContext = proxyquire(SRC_DIR + '/audio/audio-context', {'../utils/error': ERROR});

    it('constructor should throw an unsupported feature error', function() {
        expect(function(){new AudioContext()}).to.throw(ERROR.UNSUPPORTED_FEATURE);
    });
});