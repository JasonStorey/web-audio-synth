var window = require('../utils/window'),
    ERROR = require('../utils/error');

function AudioContext() {
    try {
        this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.destination = this._audioContext.destination;
    } catch (e) {
        throw new Error(ERROR.UNSUPPORTED_FEATURE);
    }
}

AudioContext.prototype.createGain = function createGain() {
    return this._audioContext.createGain();
};

module.exports = AudioContext;