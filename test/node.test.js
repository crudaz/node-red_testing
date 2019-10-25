var should = require("should")
var helper = require("node-red-node-test-helper")

//const { loadFlow } = require('../helper')

/* let testFlows
beforeEach(async () => {
    testFlows = await loadFlow('./flow-local.json');
}) */

helper.init(require.resolve('node-red'));

describe('testing', () => {

    beforeEach((done) => {
        helper.startServer(done)
    })

    var testNode = require("../20-inject.js");

    it('should be loaded', function(done) {
        var testFlows = [{id:"n1", type:"inject"}];
        helper.load(testNode, testFlows, function() {
            var n1 = helper.getNode("n1");
            done();
        });
    });

    // fix error = TypeError: setTimeout(...).unref is not a function
    setTimeout().__proto__.unref = function () {}

    it('should send a message', (done) => {
        var testFlows = [
            {id:"n1", type:"inject", payload:"hello world!", once: true, wires:[["n2"]] },
            {id:"n2", type:"helper"}
        ];
        helper.load(testNode, testFlows, () => {
            var n1 = helper.getNode("n1");
            n1.on("input", function(msg) {
                console.log(msg)
                msg.should.have.property('payload', 'hello world!');
                done();
          });
        });
    });
    
    afterEach(function(done) {
        helper.unload().then(function() {
            helper.stopServer(done);
        });
    });
})
