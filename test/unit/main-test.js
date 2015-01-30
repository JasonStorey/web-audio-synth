describe('Main', function() {
    var system = {},
        Main = proxyquire(SRC_DIR + '/main', {'./audio/system': system });

    it('should initialise system', function() {
        sinon.stub(system, 'init');
        Main();
        expect(system.init).to.have.been.calledOnce;
    });
});