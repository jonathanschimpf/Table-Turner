const config = require('../config/config');
const mongoose = require('mongoose');

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

require('dotenv').config();

let Menu = require('../models/menu');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should(); // ⭐ Don't comment this line out ⭐




// // Authenticated Tests
var request = require('supertest');
var expect = chai.expect;


chai.use(chaiHttp);





if (!config.USER_NAME) {
    throw new Error('config is missing USER_NAME')
}



// Test data

const baseRoute = "/api/menus";



// Define menu
let menu = {
    item: "Roasted Sullivan Farm Chicken",
    price: "31.00",
    ingredients: "Ricotta Gnocchi, Wild Mushrooms, Rosemary Cream, Broccolini",
    section: "Main Course",
};



//let's set up the data we need to pass to the login method
const userCredentials = {
    username: config.USER_NAME,
    password: config.PASSWORD
}

//now let's login the user before we run any tests
let authenticatedUser = request.agent(server);
before(function (done) {
    authenticatedUser
        .post('/api/login')
        .send(userCredentials)
        .end(function (err, response) {
            console.log("response code is: ", response.statusCode, ' and body is: ', response.body);
            expect(response.statusCode).to.equal(200);
            // expect('Location', '/home');
            done();
        });
});
//this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
//after the POST has completed, make sure the status code is 200 
//also make sure that the user has been directed to the /home page




describe('--- MENU', () => {



    describe('GET /api/menus', function (done) {
        //addresses 1st bullet point: if the user is logged in we should get a 200 status code
        it('should return a 200 response if the user is logged in', function (done) {
            authenticatedUser.get('/api/menus')
                .end(function (err, res) {
                    res.body.should.be.a('array');
                    done();
                })
            // .expect(200, done);
        });
        //addresses 2nd bullet point: if the user is not logged in we should get a 302 response code and be directed to the /login page
        it('should return a 401 response if user is NOT logged in', function (done) {
            request(server).get('/api/menus')
                // .expect('Location', '/login')
                .expect(401, done);
        });
    });

    /*
    * Test the /POST route
    */
    describe('POST /api/menus', () => {

        it('it should POST a menu ', (done) => {
            menu
            authenticatedUser
                .post(baseRoute)
                .send(menu)
                .end((err, res) => {
                    // console.log('res.body is: ', res.body);

                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('item');
                    res.body.should.have.property('ingredients');
                    res.body.should.have.property('section');
                    done();
                });
        });
    });





    /*
    / * Test the /GET/:id route
    */
    describe('/GET/:id menu', () => {
        it('it should GET a menu by the given id', (done) => {

            authenticatedUser
                .post(baseRoute)
                .send(menu)
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.have.property('_id');

                    let _id = res.body._id;

                    // then get menu by id
                    authenticatedUser
                        .get(baseRoute + "/" + _id)
                        .send(menu)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('_id');
                            res.body.should.have.property('item');
                            res.body.should.have.property('ingredients');
                            res.body.should.have.property('section');
                            done();
                        });
                })

        });

    });

});



/*
/ * Test the /DELETE/:id route
*/
describe('/DELETE/:id menu', () => {
    it('it should DELETE a menu by the given id', (done) => {

        authenticatedUser
            .post(baseRoute)
            .send(menu)
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.have.property('_id');

                let _id = res.body._id;

                // then get menu by id
                authenticatedUser
                    .delete(baseRoute + "/" + _id)
                    .send(menu)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('item');
                        res.body.should.have.property('ingredients');
                        res.body.should.have.property('section');
                        done();
                    });
            })

    });

});