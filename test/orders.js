var mongoose = require("mongoose");
var order = require('../app/models/order');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET orders', () => {
  it('it should GET all orders', (done) => {
    chai.request(server)
        .get('/orders')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.not.be.empty;
          done();
        });
  });
});

/* Once required functionality is imiplemented,
** create corresponding tests
*/ 

/***** test GET /order/:id *****/

//your test goes here

/***** test POST /order/ *****/

//your test goes here


/***** test DELETE /order/:id *****/

//your test goes here