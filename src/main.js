var system = require('./audio/system');

function Main() {
    system.init();
}

module.exports = {
    init: Main
};