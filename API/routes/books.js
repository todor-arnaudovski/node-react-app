const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

router.route('/')
  .get(books.getBooks)
  .post(books.createBook);

router.route('/:id')
  .get(books.getBook)
  .put(books.updateBook)
  .patch(books.updateBookUser)
  .delete(books.deleteBook);

module.exports = router;
