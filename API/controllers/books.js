const { models } = require('../sequelize');

const Book = models.Book;
const User = models.User;

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();

  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const title = req.params.title;
  const book = await Book.findOne({
    where: { title: title },
    include: User,
  });

  if (!book) {
    console.log('book not found');
    return res.send('book not found');
  }

  res.send(book);
};

module.exports.createBook = async (req, res) => {
  const book = await Book.create({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    userId: req.body.userId,
  });

  res.send(book);
};

module.exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findOne({ where: { id: id } });

  if (!book) {
    console.log('Book not found');
    return res.send('Book not found');
  }

  await book.destroy(book);

  res.send(book);
};
