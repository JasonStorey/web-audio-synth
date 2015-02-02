function Gain(config) {
    this._audioContext = config.audioContext;
    this._gainNode = this._audioContext.createGain();
}

Gain.prototype.connect = function connect(node) {
    this._gainNode.connect(node);
};

Gain.prototype.getAudioNode = function getAudioNode() {
    return this._gainNode;
};

module.exports = Gain;