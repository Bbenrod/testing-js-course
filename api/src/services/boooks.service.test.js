const BooksService = require('./books.service');

const MongoLibStub = {
  getAll: () => [
    {
      _id: 1,
      name: 'book 1',
    },
    {
      _id: 2,
      name: 'book 2',
    },
  ],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => MongoLibStub)
);

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      const books = service.getBooks();
      expect(books.length).toEqual(2);
    });
    test('should return a book name', async () => {
      const books = service.getBooks();
      expect(books[0].name).toEqual('book 1');
    });
  });
});
