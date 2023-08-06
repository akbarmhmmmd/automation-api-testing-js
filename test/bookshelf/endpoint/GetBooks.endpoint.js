const supertest = require('supertest');

const api = supertest('http://localhost:5000')
const data = require('../data/bookshelf.test.data');

const endpoint = {
    Get: (url) => `/books${url}`,
};

const getBooks = (token) => api.get(endpoint.Get(data.Detail.allBooksId))
  .set('Accept', 'application/json')
  .set('Authorization', token)
  .send();

const getInvalidBooks = (token) => api.get(endpoint.Get(`/${data.Detail.invalidBooksId}`))
  .set('Accept', 'application/json')
  .set('Authorization', token)
  .send();

module.exports = {
    getBooks,
    getInvalidBooks
};
