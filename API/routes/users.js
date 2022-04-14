const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.route('/')
  .get(users.getUsers)
  .post(users.createUser);

router.route('/:firstName')
  .get(users.getUser);

module.exports = router;
