const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')
const DATA = require('../../data/userData.js')

describe('Post Request', () => {
    const response = request(baseUrl()).post('/user').send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async() => {
        //check response status
        expect((await response).status).to.equal(200)
    })
    it('response body to haveOwnProperty', async() => {
        //expext value "message" in body response
        expect((await response).body).to.haveOwnProperty('message')
    })
    //report with mochawesome
})