const Book = require('../models/Book');

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();

  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const title = req.params.title;
  const book = await Book.findOne({ where: { title: title } });

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
  });

  console.log(`Created new book: ${book.title} by ${book.author}`);

  res.send(book);
};
