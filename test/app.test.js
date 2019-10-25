//jest.mock('../http.js')
const { loadFlow } = require('../helper')

const helper = require("node-red-node-test-helper")
const nodeId = 'c91b1b86.e9f618';

helper.init(require.resolve('node-red'))

describe('Http Request GET', () => {
    let flow
    
    beforeEach(async () => {
        flow = await loadFlow('./flows-local.json');
    })

    it('Should the http be of type GET', () => {
        let httpIn = flow
            .filter((node) => node.id === nodeId)[0]

        let method = httpIn.method
        expect(method).toBe('get')
    })

    it('Should the url be /users', () => {
        let httpIn = flow
            .filter((node) => node.id === nodeId)[0]

        let url = httpIn.url
        expect(url).toBe('/users')
    })

    it('Should be the input type node', () => {
        let httpIn = flow
            .filter((node) => node.id === nodeId)[0]

        let url = httpIn.type
        expect(url).toBe('http in')
    })

    it('Should be loaded', () => {
        const mongoNodeId = '379d426f.c140fe';
        let node = flow
            .filter((node) => node.id === mongoNodeId)
    })

})

