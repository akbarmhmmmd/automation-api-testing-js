const supertest = require('supertest');
const data = require('../data/bookshelf.test.data');

const api = supertest('http://localhost:5000');

const endpoint = {
    Get: (url) => `/books${url}`,
};

const getBooks = (token) => api.get(endpoint.Get(data.Detail.allBooksId))
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send();

const getBookValidId = (token, bookId) => api.get(endpoint.Get(`/${bookId}`))
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
