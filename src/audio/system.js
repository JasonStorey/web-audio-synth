var AudioContext = require('./audio-context'),
    ERROR = require('../utils/error'),
    Gain = require('./gain');

function System() {
    var audioContext,
        masterGain;

    function init() {
        audioContext = new AudioContext();
        masterGain = new Gain({
            audioContext: audioContext
        });
        masterGain.connect(audioContext.destination);
    }

    function getAudioContext() {
        if(!audioContext) {
            throw new Error(ERROR.SETUP_ERROR);
        }
        return audioContext;
    }

    function getOutput() {
        if(!audioContext) {
            throw new Error(ERROR.SETUP_ERROR);
        }
        return masterGain.getAudioNode();
    }

    return {
        init: init,
        getAudioContext: getAudioContext,
        getOutput: getOutput
    };
}

module.exports = System();