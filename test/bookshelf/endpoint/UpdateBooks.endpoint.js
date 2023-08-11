const supertest = require('supertest');
const data = require('../data/bookshelf.test.data');

const api = supertest('http://localhost:5000');

const endpoint = {
    Put: (url) => `/books${url}`,
};

const updateBooks = (token, bookId) => api.put(endpoint.Put(`/${bookId}`))
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.updateCompleteData);

const updateBooksWithoutName = (token, bookId) => api.put(endpoint.Put(`/${bookId}`))
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.updateWithoutName);

const updateReadMoreThanPage = (token, bookId) => api.put(endpoint.Put(`/${bookId}`))
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.updateReadMoreThanPage);

const updateWithInvalidId = (token) => api.put(endpoint.Put(`/${data.Detail.invalidBookId}`))
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.updateCompleteData);

module.exports = {
    updateBooks,
    updateBooksWithoutName,
    updateReadMoreThanPage,
    updateWithInvalidId,
};
