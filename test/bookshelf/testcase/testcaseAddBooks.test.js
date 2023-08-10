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

      expect(bookResponse._body.status).to.equal(data.message.successMessage);
      expect(bookResponse._body.message).to.equal(data.message.successAddBook);
      expect(bookResponse._body.data.bookId).to.be.a('string');
    });
});

describe('User Add Books Negative Scenario', () => {
    retry(data.testCase.BookshelfAddBook.negative.addBookWithoutName, numRetries, async () => {
      const bookResponse = await endpointAddBooks.postBooksWithoutName(
        token = tokenLoginAccess,
      );

      //console.log('bookResponse:', bookResponse);

      expect(bookResponse._body.status).to.equal(data.message.failMessage);
      expect(bookResponse._body.message).to.equal(data.message.failAddBook);
    });

    retry(data.testCase.BookshelfAddBook.negative.addBookWithPageReadMoreThanPageCount, numRetries, async () => {
      const bookResponse = await endpointAddBooks.postBooksReadMoreThanPage(
        token = tokenLoginAccess,
      );

      //console.log('bookResponse:', bookResponse);

      expect(bookResponse._body.status).to.equal(data.message.failMessage);
      expect(bookResponse._body.message).to.equal(data.message.readPageWarning);
    });
});
