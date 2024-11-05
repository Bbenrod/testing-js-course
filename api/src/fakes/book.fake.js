const generateOneBook = () => ({
  name: 'book test',
  price: 1,
});

const generateManyBooks = (size = 10) => {
  return Array.from({ length: size }, generateOneBook);
};

module.exports = {
  generateOneBook,
  generateManyBooks,
};
