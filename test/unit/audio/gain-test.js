describe('Gain', function() {
    var Gain,
        mockAudioContext,
        mockGainNode;

    beforeEach(function() {
        Gain = require(SRC_DIR + '/audio/gain');

        mockGainNode = {
            connect: sinon.stub()
        };

        mockAudioContext = {
            createGain: sinon.stub().returns(mockGainNode)
        };
    });

    describe('Constructor', function() {
        it('creates and stores new gain node from AudioContext', function() {
            var gain = new Gain({audioContext: mockAudioContext});
            expect(gain._gainNode).to.equal(mockGainNode);
        });
    });

    describe('Methods', function() {
        var gain;

        beforeEach(function() {
            gain = new Gain({audioContext: mockAudioContext});
        });

        it('implements connect', function() {
            var mockNode = 'an audio node';
            gain.connect(mockNode);
            expect(gain._gainNode.connect).to.have.been.calledWith(mockNode);
        });

        it('implements getAudioNode', function() {
            var nativeGainNode = gain.getAudioNode();
            expect(nativeGainNode).to.equal(mockGainNode);
        });
    });
});