const chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();

var assert = require('assert');

const API = 'http://localhost:5001'
chai.use(chaiHttp);

describe("GET /users",function(){
  var token;
  this.beforeEach('Get login token', (done) => {
    chai.request(API)
      .post('/auth/login')
      .send({'username': 'juanperez','password': '123456'})
      .end((err, res) => {
        res.should.have.status(200)
        token= res.body.token
        done()
    })
  })    

  it('using valid token, should return 200', (done) => {
    chai.request(API)
      .get('/api/v1.0/users')
      .set('x-access-token', token)
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.a('object')
       body= res.body.users[0] 
       body.should.have.property('id');
       body.should.have.property('username');
       body.should.have.property('Tasks');
       done()
     })
  })

  it('using invalid token, should return Invalid token', (done) => {
    chai.request(API)
      .get('/api/v1.0/users')
      .set('x-access-token', token+1)
      .end((err, res) => {
       res.should.have.status(401)
       assert.equal(res.status, 401, "Invalid token");
       done()
     })
  })

  it('without token, should return Token required', (done) => {
    chai.request(API)
      .get('/api/v1.0/users')
      .end((err, res) => {
       res.should.have.status(401)
       assert.equal(res.status, 401, "Token required");
       done()
     })
  })
})

describe("PUT /users/invalid_id",function(){
  var token;
  this.beforeEach('Get login token', (done) => {
    chai.request(API)
      .post('/auth/login')
      .send({'username': 'juanperez','password': '123456'})
      .end((err, res) => {
        res.should.have.status(200)
        token= res.body.token
        done()
    })
  })

  it('using a valid token, should return 200', (done) => {
    chai.request(API)
      .put('/api/v1.0/users/5')
      .set('x-access-token', token)
      .send({'phone':'221-111-1111'})
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.a('object')
       done()
     })
  })

  it('using invalid token, should return Invalid token', (done) => {
    chai.request(API)
      .put('/api/v1.0/users/5')
      .set('x-access-token', token+1)
      .end((err, res) => {
       res.should.have.status(401)
       assert.equal(res.status, 401, "Invalid token");
       done()
     })
  })

  it('without token, should return Token required', (done) => {
    chai.request(API)
      .put('/api/v1.0/users/5')
      .end((err, res) => {
       res.should.have.status(401)
       assert.equal(res.status, 401, "Token required");
       done()
     })
  })
  
})
