const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointAddBooks = require('../endpoint/AddBooks.endpoint');

const numRetries = 1;
const tokenLoginAccess = `Bearer ${data.token.tokenLogin}`;

describe('User Add Books Positive Scenario', () => {
    retry(data.testCase.BookshelfAddBook.positive.addBookWithCompleteData, numRetries, async () => {
      const bookResponse = await endpointAddBooks.postBooks(
        token = tokenLoginAccess,
      );

      // console.log('bookResponse:', bookResponse);

      expect(bookResponse.res.statusCode).to.equal(data.message.successStatusCode);
      expect(bookResponse.res.statusMessage).to.equal(data.message.createdMessage);
    })
});

describe('User Add Books Negative Scenario', () => {
    retry(data.testCase.BookshelfAddBook.negative.addBookWithoutName, numRetries, async () => {
      const bookResponse = await endpointAddBooks.postBooksWithoutName(
        token = tokenLoginAccess,
      );

      // console.log('bookResponse:', bookResponse);

      expect(bookResponse.res.statusCode).to.equal(data.message.badRequestCode);
      expect(bookResponse.res.statusMessage).to.equal(data.message.badRequestMessage);
    })
});
