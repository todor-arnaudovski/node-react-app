const { models } = require('../sequelize');
const { createUrl } = require('../helpers');

const Book = models.Book;
const User = models.User;

module.exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: User,
    });

    res.send(books);
  } catch (err) {
    console.log(err.message);
    res.sedn(err.message);
  }
};

module.exports.getBook = async (req, res) => {
  const url = req.params.url;

  try {
    const book = await Book.findOne({
      where: { url: url },
      include: User,
    });

    if (!book) throw new Error('Book not found.');

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports.createBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      url: createUrl(req.body.title),
      author: req.body.author,
      published: req.body.published,
      userId: req.body.userId,
    });

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports.deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findOne({ where: { id: id } });

    if (!book) throw new Error('Book not found.');

    await book.destroy(book);

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
