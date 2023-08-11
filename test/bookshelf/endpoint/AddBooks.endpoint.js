const supertest = require('supertest');
const data = require('../data/bookshelf.test.data');

const api = supertest('http://localhost:5000');

const endpoint = {
    Post: () => '/books',
};

const postBooks = (token) => api.post(endpoint.Post())
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.completeData);

const postBooksWithoutName = (token) => api.post(endpoint.Post())
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.withoutName);

const postBooksReadMoreThanPage = (token) => api.post(endpoint.Post())
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send(data.payload.readMoreThanPageCount);

module.exports = {
    postBooks,
    postBooksWithoutName,
    postBooksReadMoreThanPage,
};
