const { models } = require('../sequelize');

const User = models.User;
const Book = models.Book;

module.exports.getUsers = async (req, res) => {
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

module.exports.getUser = async (req, res) => {
  const url = req.params.url;

  try {
    const user = await User.findOne({
      where: { url: url },
      include: Book,
    });

    if (!user) throw new Error('User not found.');

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      url: 'test',
      lastName: req.body.lastName,
      interests: req.body.interests,
    });

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ where: { id: id } });

    if (!user) throw new Error('User not found.');

    await user.destroy(user);

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
