const User = require('../models/User');

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();

  res.send(users);
};

module.exports.getUser = async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ where: { username: username } });

  if (!user) {
    console.log('User not found');
    return res.send('User not found');
  }

  res.send(user);
};

module.exports.createUser = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.send(user);
};
