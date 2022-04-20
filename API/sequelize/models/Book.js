const { DataTypes } = require('sequelize');
const { createUrl, capitalize } = require('../../helpers');

const Book = (sequelize) => {
  const BookModel = sequelize.define(
    'Book',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  BookModel.prototype.capitalize = function () {
    this.title = capitalize(this.title);
    this.author = capitalize(this.author);
  };

  BookModel.prototype.createUrl = function () {
    this.url = createUrl(this.title);
  };

  const validateFields = (book) => {
    if (!book.title) throw new Error('Title can not be empty.');
    if (!book.author) throw new Error('Author name can not be empty.');
  };

  BookModel.beforeCreate((book) => {
    validateFields(book);
  });

  BookModel.beforeUpdate((book) => {
    validateFields(book);
  });
};

module.exports = Book;
