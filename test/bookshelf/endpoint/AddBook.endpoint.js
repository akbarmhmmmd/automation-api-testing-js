const supertest = require('supertest');

const api = supertest('http://localhost:5000')
const data = require('../data/bookshelf.test.data');

const endpoint = {
    Post: () => '/5000/books'
};

const postBook = (token) => api.post(endpoint.Post())
  .set('Accept', 'application/json')
  .set('Authorization', token)
  .send();

module.exports = {
    postBook
};
