# node-red_testing

Node Test Helper
Using the test-helper, your tests can start the Node-RED runtime, load a test flow, and receive messages to ensure your node code is correct.

https://github.com/node-red/node-red-node-test-helper


Test components
https://github.com/node-red/node-red/wiki/Testing

In loading flow example it’s necessary to know the location of the file 
20-inject.js, as you can see below:

var testNode = require("../../../../nodes/core/core/20-inject.js");

The file is located in this url: https://github.com/node-red/node-red/tree/master/packages/node_modules/%40node-red/nodes/core/common