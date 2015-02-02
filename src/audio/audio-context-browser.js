var window = require('../utils/window'),
    ERROR = require('../utils/error');

function AudioContext() {
    try {
        this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        throw new Error(ERROR.UNSUPPORTED_FEATURE);
    }

    this.destination = this._audioContext.destination;
}

module.exports = AudioContext;