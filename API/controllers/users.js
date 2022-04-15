const User = require('../models/User');

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();

  res.send(users);
};

module.exports.getUser = async (req, res) => {
  const firstName = req.params.firstName;
  const user = await User.findOne({ where: { firstName: firstName } });

  if (!user) {
    console.log('User not found');
    return res.send('User not found');
  }

  res.send(user);
};

module.exports.createUser = async (req, res) => {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    interests: req.body.interests,
  });

  res.send(user);
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ where: { id: id } });

  if (!user) {
    console.log('User not found');
    return res.send('User not found');
  }

  await user.destroy(user);

  res.send(user);
};
