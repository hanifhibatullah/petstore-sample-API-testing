const request = require('supertest')
const baseUrl = require('../../environment')

describe('Get Request Testing', () => {
    it('Find Pets by State', async() => {
        //const response = request('https://petstore.swagger.io/v2').get('/store/inventory') -> not required const baseURL = require('../../environment') dan create environtment.js
        const response = request(baseUrl()).get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
    it('Find Pets by ID', async() => {
        //const response = request('https://petstore.swagger.io/v2').get('/store/inventory') -> not required const baseURL = require('../../environment') dan create environtment.js
        const response = request(baseUrl()).get('/pet/1')
        console.log((await response).status)
        console.log((await response).body)
    })
})