//const { it } = require('mocha');
const assert = require('chai').assert
const app = require('../../assert')

//Asserting
//Use chai for assert
describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), "welcome")
    })
})