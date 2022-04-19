const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

router.route('/')
  .get(books.getBooks)
  .post(books.createBook);

router.route('/:url')
  .get(books.getBook);

router.route('/:id')
  .delete(books.deleteBook);

module.exports = router;
