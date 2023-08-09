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

const getBookValidId = (token) => api.get(endpoint.Get(`/${data.payload.completeData.bookId}`))
  .set('Accept', 'application/json')
  .set('Authorization', token)
  .send();

const getInvalidBooks = (token) => api.get(endpoint.Get(`/${data.Detail.invalidBookId}`))
  .set('Accept', 'application/json')
  .set('Authorization', token)
  .send();

module.exports = {
    getBooks,
    getBookValidId,
    getInvalidBooks,
};
