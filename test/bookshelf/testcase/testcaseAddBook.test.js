const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointAddBookWithCompleteData = require('../endpoint/AddBook.endpoint');

const numRetries = 1;
const tokenLoginAccess = `Bearer ${data.token.tokenLogin}`;

describe('User Add Books Positive Scenario', () => {
    retry(data.testCase.BookshelfAddBook.positive.addBookWithCompleteData, numRetries, async () => {
      const bookResponse = await endpointAddBookWithCompleteData.postBook(
        tokenLoginAccess,
      );
  
      expect(bookResponse._body.statusCode).to.equal(data.message.successCode);
      expect(bookResponse._body.message).to.equal(data.message.successMessage);
    });
});
