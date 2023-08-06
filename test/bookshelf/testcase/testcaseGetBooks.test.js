const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointGetBooks = require('../endpoint/GetBooks.endpoint');

const numRetries = 1;
const tokenLoginAccess = `Bearer ${data.token.tokenLogin}`;

describe('User Get Books Positive Scenario', () => {
    retry(data.testCase.BookshelfGetBook.positive.getAllBooks, numRetries, async () => {
      const bookResponse = await endpointGetBooks.getBooks(
        token = tokenLoginAccess,
      );

      // console.log('bookResponse:', bookResponse);
  
      expect(bookResponse.res.statusCode).to.equal(data.message.okStatusCode);
      expect(bookResponse.res.statusMessage).to.equal(data.message.statusMessage);
    });
});

describe('User Get Books Negative Scenario', () => {
  retry(data.testCase.BookshelfGetBook.negative.getDetailBooksWithoutAddBook, numRetries, async () => {
    const bookResponse = await endpointGetBooks.getInvalidBooks(
      token = tokenLoginAccess,
    );

    // console.log('bookResponse:', bookResponse);

    expect(bookResponse.res.statusCode).to.equal(data.message.notFoundCode);
    expect(bookResponse.res.statusMessage).to.equal(data.message.notFoundMessage);
  });
});
