const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.route('/')
  .get(users.getUsers)
  .post(users.createUser);

router.route('/:url')
  .get(users.getUser);

router.route('/:id')
  .delete(users.deleteUser);

module.exports = router;
