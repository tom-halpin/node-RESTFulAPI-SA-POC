    // based on https://ubuverse.com/introduction-to-node-js-api-unit-testing-with-mocha-and-chai/
    // coverage https://ricostacruz.com/til/mocha-instanbul-coverage
    'use strict';
     
    const chai = require('chai');  
    const expect = require('chai').expect;
     
    chai.use(require('chai-http'));
     
    const app = require('../app.js'); // Our app

    //In a Mocha test, we describe our tests using the describe function,
    /** @test {contacts} */
    describe('API endpoint /v1/contacts', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List all contacts
      /** @test {contacts#list} */
      it('should return all contacts', function() {
        return chai.request(app)
          .get('/v1/contacts')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('object');;
            expect(res.body.results.result).to.be.an('array');
            expect(res.body.results.result.length).to.equal(2);
            expect(res.body.results.result[0].firstname).to.equal('Joe');
            expect(res.body.results.result[1].firstname).to.equal('John');            
          });
      });
    });

    describe('API endpoint /v1/contacts', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List one specific contact

      it('should return a specific contact', function() {
        return chai.request(app)
          .get('/v1/contacts?firstname=joe')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('object');;
            expect(res.body.results.firstname).to.equal('Joe');            
          });
      });
    });

    describe('API endpoint /v1/contacts:number', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List one specific contact
      it('should return a specific contact', function() {
        return chai.request(app)
          .get('/V1/contacts/+359777123456')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('object');;
            expect(res.body.results.firstname).to.equal('Joe');            
          });
      });
    });

    describe('API endpoint /v1/groups', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      before(function() {
     
      });
     
      after(function() {
     
      });

      // GET - List all groups
      it('should return members of all groups', function() {
        return chai.request(app)
          .get('/v1/groups')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('array').that.includes('Dev', 'Family');
          });
      });
     
      // GET - Invalid path
      it('should return Not Found', function() {
        return chai.request(app)
          .get('/INVALID_PATH')
          .then(function(res) {
            throw new Error('Path exists!');
          })
          .catch(function(err) {
            expect(err).to.have.status(404);
          });
      });
   });

   describe('API endpoint /v1/groups:name', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List one specific contact

      it('should return members of a specific group', function() {
        return chai.request(app)
          .get('/V1/groups/Family')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('array');           
          });
      });
    });
     /*
      // POST - Add new color
      it('should add new color', function() {
        return chai.request(app)
          .post('/colors')
          .send({
            color: 'YELLOW'
          })
          .then(function(res) {
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('array').that.includes(
              'YELLOW');
          });
      });
     
      // POST - Bad Request
      it('should return Bad Request', function() {
        return chai.request(app)
          .post('/v1/groups')
          .type('form')
          .send({
            color: 'Beatles'
          })
          .then(function(res) {
            throw new Error('Invalid content type!');
          })
          .catch(function(err) {
            expect(err).to.have.status(400);
          });
      });*/
 
