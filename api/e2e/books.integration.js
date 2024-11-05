const { generateManyBooks } = require('../src/fakes/book.fake');
const mockGetAll = jest.fn();
const request = require('supertest');

const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }));
});

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list of books', () => {
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toBe(fakeBooks.length);
        });
    });
  });
});
