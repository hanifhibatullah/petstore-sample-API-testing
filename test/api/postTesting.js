const request = require('supertest')
const baseUrl = require('../../environment')

describe('Post Request Testing', () => {
    it('Success create user', async() => {
        //create baseUrl function in environment.js first
        const response = request(baseUrl()).post('/user')
        .send({
            "id": 123,
            "username": "hanif_hibatullah",
            "firstName": "hanif",
            "lastName": "hibatullah",
            "email": "hanif@mailsac.com",
            "password": "password",
            "phone": "123123",
            "userStatus": 7
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})