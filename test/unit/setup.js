var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.proxyquire = require('proxyquire');
global.sinon = sinon;
global.expect = chai.expect;
global.SRC_DIR = process.cwd() + '/src';
global.window = this;