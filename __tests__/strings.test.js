const request = require('supertest');
const app = require('../src/app');

describe('/strings', () => {
  describe('GET /hello/{string}', () => {
    it('returns "Hello world!" when passed "world"', done => {
      request(app)
        .get('/strings/hello/world')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, world!' });
          done();
        });
    });
    it('returns "Hello, turtle!" when passed "turtle"', done => {
      request(app)
        .get('/strings/hello/turtle')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, turtle!' });
          done();
        });
    });
    it('returns "Hello, MCR Codes!" when passed "MCR Codes"', done => {
      request(app)
        .get('/strings/hello/MCR Codes')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, MCR Codes!' });
          done();
        });
    });
    it('returns "Hello, fsghjdfkhgf!" when passed "fsghjdfkhgf"', done => {
      request(app)
        .get('/strings/hello/fsghjdfkhgf')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, fsghjdfkhgf!' });
          done();
        });
    });
  });

  describe('GET /upper/{string}', () => {
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'HELLO' });
          done();
        });
    });
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/abc')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'ABC' });
          done();
        });
    });
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/def')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'DEF' });
          done();
        });
    });
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/ghi')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'GHI' });
          done();
        });
    });
  });

  describe('GET /lower/{string}', () => {
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/HELLO')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'hello' });
          done();
        });
    });
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/ABC')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'abc' });
          done();
        });
    });
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/DEF')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'def' });
          done();
        });
    });
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/GHI')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'ghi' });
          done();
        });
    });
  });

  describe('GET /first-characters/{string}', () => {
    it('returns the first character of the string when there is no query string', done => {
      request(app)
        .get('/strings/first-characters/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'h' });
          done();
        });
    });

    it('returns the first n character of the string when passed a query parameter', done => {
      request(app)
        .get('/strings/first-characters/sd32fg45')
        .query({ length: 5 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'sd32f' });
          done();
        });
    });
  });
});
