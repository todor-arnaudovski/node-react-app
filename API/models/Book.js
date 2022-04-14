const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/myAppDb.db',
  logging: false,
});

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.DATEONLY,
  },
});

Book.sync();

module.exports = Book;
