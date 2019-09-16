"use strict";

const axios = require("axios");
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const API_URL = 'https://f3rqrapxrfgxbinryu2s3aurkq.appsync-api.eu-west-1.amazonaws.com/graphql';
const AUTH_TOKEN = 'da2-6gsug3rxuja75nqnom67h3x2vi';
describe('test graphql request', function () {

    it('should return list of boats ', async function () {
        const axiosZizooGraphQL = axios.create({
            baseURL: API_URL,
            headers: {
                Authorization: AUTH_TOKEN,
            },
        });
        let result = null;
        await axiosZizooGraphQL
            .post('/listZizooChallengeOffers', {query: "some query"})
            .then(function (response) {
                result = response.data;
                // console.log('data', response.data);
                // console.log('status', response.status);
            });
        expect(result).to.not.be.null;

    });


});





