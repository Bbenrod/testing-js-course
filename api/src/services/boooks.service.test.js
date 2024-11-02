const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      const fakeBooks = generateManyBooks(10);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', undefined);
    });
    test('should return a book name', async () => {
      const fakeBooks = generateManyBooks(10);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
