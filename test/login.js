// // //During the test the env variable is set to test
// // process.env.NODE_ENV = 'test';


// require('dotenv').config();


// const USER_NAME = process.env.USER_NAME;
// const PASSWORD = process.env.PASSWORD;



// // //Require the dev-dependencies
// // let chai = require('chai');
// // let chaiHttp = require('chai-http');
// // let server = require('../server');
// // let should = chai.should();


// // chai.use(chaiHttp);


// // const baseRoute = "/api/login";




// // //Our parent block
// // // describe('Authentication', () => {
// // //     beforeEach((done) => { //Before each test we empty the database
// // //         Book.remove({}, (err) => {
// // //             done();
// // //         });
// // //     });
// // // });


// // describe('Authentication', () => {


// //     /*
// //     * Test the /POST route
// //     */
// //     describe('/POST login', () => {
// //         it('it should not POST a login with invalid credentials', (done) => {
// //             let loginData = {
// //                 username: USER_NAME,
// //                 password: "567",
// //             }
// //             chai.request(server)
// //                 .post(baseRoute)
// //                 .send(loginData)
// //                 .end((err, res) => {
// //                     console.log(res.body);
// //                     res.should.have.status(404);
// //                     res.body.should.be.a('object');
// //                     // res.body.should.eql('No User Exists');
// //                     done();
// //                 });
// //         });

// //         it('it should POST a login with valid credentials', (done) => {
// //             let loginData = {
// //                 username: USER_NAME,
// //                 password: PASSWORD,
// //             }
// //             console.log('loginData is: ', loginData);
// //             chai.request(server)
// //                 .post(baseRoute)
// //                 .send(loginData)
// //                 .end((err, res) => {
// //                     res.should.have.status(200);
// //                     res.body.should.be.a('object');
// //                     res.body.should.have.property('_id');
// //                     res.body.should.have.property('username');
// //                     res.body.should.have.property('password');
// //                     res.body.should.have.property('title');
// //                     done();
// //                 });
// //         });

// //     });



// // })



// //During the test the env variable is set to test
// process.env.NODE_ENV = 'test';


// let Menu = require('../models/menu');

// //Require the dev-dependencies
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should(); // ⭐ Don't comment this line out ⭐




// // Authenticated Tests
// var request = require('supertest');
// var expect = chai.expect;


// chai.use(chaiHttp);



// //let's set up the data we need to pass to the login method
// const userCredentials = {
//     username: USER_NAME,
//     password: PASSWORD
// }

// //now let's login the user before we run any tests
// let authenticatedUser = request.agent(server);
// before(function (done) {
//     authenticatedUser
//         .post('/api/login')
//         .send(userCredentials)
//         .end(function (err, response) {
//             console.log("response code is: ", response.statusCode, ' and body is: ', response.body);
//             expect(response.statusCode).to.equal(200);
//             // expect('Location', '/home');
//             done();
//         });
// });
// //this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
// //after the POST has completed, make sure the status code is 200 
// //also make sure that the user has been directed to the /home page







// describe('GET /api/orders', function (done) {
//     //addresses 1st bullet point: if the user is logged in we should get a 200 status code
//     it('should return a 200 response if the user is logged in', function (done) {
//         authenticatedUser.get('/api/orders')
//             .expect(200, done);
//     });
//     //addresses 2nd bullet point: if the user is not logged in we should get a 302 response code and be directed to the /login page
//     it('should return a 401 response if user is NOT logged in', function (done) {
//         request(server).get('/api/orders')
//             // .expect('Location', '/login')
//             .expect(401, done);
//     });
// });
