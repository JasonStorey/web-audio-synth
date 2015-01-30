var AudioContext = require('./audio-context'),
    ERROR = require('../utils/error');

function System() {
    var audioContext;

    function init() {
        audioContext = new AudioContext();
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
        return audioContext.destination
    }

    return {
        init: init,
        getAudioContext: getAudioContext,
        getOutput: getOutput
    };
}

module.exports = System();