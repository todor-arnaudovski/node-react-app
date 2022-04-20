const { models } = require('../sequelize');

const User = models.User;
const Book = models.Book;

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Book,
    });

    res.send(users);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getUser = async (req, res) => {
  const url = req.params.url;

  try {
    const user = await User.findOne({
      where: { url: url },
      include: Book,
    });

    if (!user) throw new Error('User not found');

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.build({
      url: '',
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      interests: req.body.interests,
    });

    if (user) {
      user.createUrl();
      user.capitalize();
    }

    await user.save();

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const updateUser = async (req, res) => {
  const url = req.params.url;

  try {
    const user = await User.findOne({ where: { url: url } });

    if (!user) throw new Error('User not found.')

    user.set({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      interests: req.body.interests,
    });

    if (user) {
      user.createUrl();
      user.capitalize();
    }

    await user.save();

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const deleteUser = async (req, res) => {
  const url = req.params.url;

  try {
    const user = await User.findOne({ where: { url: url } });

    if (!user) throw new Error('User not found');

    await user.destroy(user);

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
