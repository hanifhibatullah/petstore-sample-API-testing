const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')
const DATA_USER = require('../../data/userData.js')
//const DATA_PET = require('../../data/petData.js')

describe('Post Request', () => {
    const response = request(baseUrl()).post('/user').send(DATA_USER.CREATE_USER_DATA)
    //const response = request(baseUrl()).post('/pet').send(DATA_PET.CREATE_PET_DATA)

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