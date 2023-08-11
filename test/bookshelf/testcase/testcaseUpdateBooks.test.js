const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointUpdateBooks = require('../endpoint/UpdateBooks.endpoint');
const endpointAddBooks = require('../endpoint/AddBooks.endpoint');

const numRetries = 1;
const tokenLoginAccess = `Bearer ${data.token.tokenLogin}`;

let bookResponse;

beforeAll(async () => {
    bookResponse = await endpointAddBooks.postBooks(tokenLoginAccess);
    global.bookId = bookResponse._body.data.bookId;
  });

describe('Update Books Positive Scenario', () => {
  retry(data.testCase.BookshelfUpdateBook.positive.updateBooksCompleteData, numRetries, async () => {
    const bookResponse = await endpointUpdateBooks.updateBooks(tokenLoginAccess, bookId);
    
    expect(bookResponse._body.status).to.equal(data.message.successMessage);
    expect(bookResponse._body.message).to.equal(data.message.successUpdateBook);
  });
});

describe('Update Books Negative Scenario', () => {
  retry(data.testCase.BookshelfUpdateBook.negative.updateBooksWithoutName, numRetries, async () => {
    const bookResponse = await endpointUpdateBooks.updateBooksWithoutName(tokenLoginAccess, bookId);
    
    expect(bookResponse._body.status).to.equal(data.message.failMessage);
    expect(bookResponse._body.message).to.equal(data.message.failUpdateBook);
  });

  retry(data.testCase.BookshelfUpdateBook.negative.updateBooksPageReadMoreThanPageCount, numRetries, async () => {
    const bookResponse = await endpointUpdateBooks.updateReadMoreThanPage(tokenLoginAccess, bookId);

    expect(bookResponse._body.status).to.equal(data.message.failMessage);
    expect(bookResponse._body.message).to.equal(data.message.failUpdateReadMoreThanPage);
  });

  retry(data.testCase.BookshelfUpdateBook.negative.updateBooksInvalidId, numRetries, async () => {
    const bookResponse = await endpointUpdateBooks.updateWithInvalidId(tokenLoginAccess);

    expect(bookResponse._body.status).to.equal(data.message.failMessage);
    expect(bookResponse._body.message).to.equal(data.message.failUpdateWithInvalidId);
  });
});
