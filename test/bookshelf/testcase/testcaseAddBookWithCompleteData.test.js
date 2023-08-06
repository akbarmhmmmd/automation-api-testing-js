const { expect } = require('chai');
const retry = require('jest-retries');
const data = require('../data/bookshelf.test.data');
const endpointAddBookWithCompleteData = require('../endpoint/AddBookWithCompleteData.endpoint');

const numRetries = 1;

describe('User Add Books Positive Scenario', () => {
    retry(data.testCase.BookshelfAddBook.positive.addBookWithCompleteData, numRetries, async () => {
      const bookResponse = await endpointAddBookWithCompleteData.postBook();
  
      expect(bookResponse._body.statusCode).to.equal(data.message.successCode);
      expect(bookResponse._body.message).to.equal(data.message.successMessage);
    });
});
