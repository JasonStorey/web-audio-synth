var ERROR = require('../utils/error');

function AudioContext() {
    throw new Error(ERROR.UNSUPPORTED_FEATURE); // Throw until there is a AudioContext shim for Node.
}

module.exports = AudioContext;