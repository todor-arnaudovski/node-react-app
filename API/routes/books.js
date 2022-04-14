const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

router.route('/')
  .get(books.getBooks)
  .post(books.createBook);

router.route('/:title')
  .get(books.getBook);

module.exports = router;
