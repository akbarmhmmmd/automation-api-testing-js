const supertest = require('supertest');

const api = supertest('http://localhost:5000')
const data = require('../data/bookshelf.test.data');

const endpoint = {
    Post: () => '/5000/books'
};

const postBook = () => api.post(endpoint.Post())
  .set('Accept', 'application/json')
  .send();

module.exports = {
    postBook
};
