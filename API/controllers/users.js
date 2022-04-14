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

  console.log(`Created new user: ${user.firstName} ${user.lastName}`);

  res.send(user);
};
