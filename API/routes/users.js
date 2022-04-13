const express = require('express');
const router = express.Router();
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/')
  .get(users.getUsers)
  .post(users.createUser);

router.route('/:username')
  .get(users.getUser);

module.exports = router;
