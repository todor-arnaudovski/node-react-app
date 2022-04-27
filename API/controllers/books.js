const { models } = require('../sequelize');

const Book = models.Book;
const User = models.User;

const getBooks = async (req, res) => {
  if (req.query.available) {
    try {
      const books = await Book.findAll({
        where: { userId: null },
      });

      res.send(books);
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
    return;
  }

  try {
    const books = await Book.findAll({
      include: User,
    });

    res.send(books);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findOne({
      where: { id: id },
      include: User,
    });

    if (!book) throw new Error('Book not found.');

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.build({
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
      userId: req.body.userId,
    });

    if (book) {
      book.createUrl();
      book.capitalize();
    }

    await book.save();

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findOne({ where: { id: id } });

    if (!book) throw new Error('book not found.');

    book.set({
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
    });

    if (book) {
      book.createUrl();
      book.capitalize();
    }

    await book.save();

    res.send(book);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const updateBookUser = async (req, res) => {
  const bookId = req.body.bookId;
  const userId = req.body.userId;

  try {
    if (!bookId) throw new Error('Id cannot be null.');

    const bookWithUpdatedUser = await Book.update(
      { userId: userId ? userId : null },
      { where: { id: bookId } }
    );

    res.send(bookWithUpdatedUser);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const deleteBook = async (req, res) => {
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

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  updateBookUser,
  deleteBook,
};
