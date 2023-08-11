const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointGetBooks = require('../endpoint/GetBooks.endpoint');
const endpointAddBooks = require('../endpoint/AddBooks.endpoint');

const numRetries = 1;
const tokenLoginAccess = `Bearer ${data.token.tokenLogin}`;

let bookResponse;

beforeAll(async () => {
  bookResponse = await endpointAddBooks.postBooks(tokenLoginAccess);
  global.bookId = bookResponse._body.data.bookId;
});

describe('User Get Books Positive Scenario', () => {
  retry(data.testCase.BookshelfGetBook.positive.getAllBooks, numRetries, async () => {
    const bookResponse = await endpointGetBooks.getBooks(tokenLoginAccess);
    
    expect(bookResponse._body.status).to.equal(data.message.successMessage);
    expect(bookResponse._body.data.books).to.be.a('array');
  });

  retry(data.testCase.BookshelfGetBook.positive.getBookWithValidId, numRetries, async () => {
    const bookResponse = await endpointGetBooks.getBookValidId(tokenLoginAccess, global.bookId);
    
    expect(bookResponse._body.status).to.equal(data.message.successMessage);
    expect(bookResponse._body.data.book).to.be.a('object');
  });
});

describe('User Get Books Negative Scenario', () => {
  retry(data.testCase.BookshelfGetBook.negative.getDetailBooksWithInvalidId, numRetries, async () => {
    const bookResponse = await endpointGetBooks.getInvalidBooks(tokenLoginAccess)
    
    expect(bookResponse._body.status).to.equal(data.message.failMessage);
    expect(bookResponse._body.message).to.equal(data.message.failGetBook);
  });
});
