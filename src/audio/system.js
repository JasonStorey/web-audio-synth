var AudioContext = require('./audio-context'),
    ERROR = require('../utils/error');

function System() {
    var audioContext;

    function init() {
        audioContext = new AudioContext();
    }

    function getOutput() {
        if(!audioContext) {
            throw new Error(ERROR.SETUP_ERROR);
        }
        return audioContext.destination
    }

    return {
        init: init,
        getOutput: getOutput
    };
}

module.exports = System();