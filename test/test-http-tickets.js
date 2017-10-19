    // based on https://ubuverse.com/introduction-to-node-js-api-unit-testing-with-mocha-and-chai/
    // coverage https://ricostacruz.com/til/mocha-instanbul-coverage
    'use strict';
     
    const chai = require('chai');  
    const expect = require('chai').expect;
     
    chai.use(require('chai-http'));
     
    const app = require('../app.js'); // Our app

    //In a Mocha test, we describe our tests using the describe function,
    /** @test {contacts} */
    describe('API endpoint /v1/tickets', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
           });
     
      after(function() {
           });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List all tickets
      /** @test {tickets#list} */
      it('should return all tickets', function() {
        return chai.request(app)
          .get('/v1/tickets')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('object');;
            expect(res.body.results.result).to.be.an('array');
            expect(res.body.results.result.length).to.equal(2);
            expect(res.body.results.result[0].instance).to.equal('SM_APJ_NWI');
            expect(res.body.results.result[1].instance).to.equal('SM_EMEA1');            
          });
      });
    });

    describe('API endpoint /v1/tickets', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
           });
     
      after(function() {
           });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List one specific instance

      it('should return a specific instance', function() {
        return chai.request(app)
          .get('/v1/tickets?instance=SM_EMEA1')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.results).to.be.an('object');
            expect(res.body.results.company[0].name).to.equal('HPE'); 
            expect(res.body.results.company[0].tickets[0].id).to.equal('E-IM003256985');           
          });
      });
    });

    
 
