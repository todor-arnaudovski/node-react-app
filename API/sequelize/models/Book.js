const { DataTypes } = require('sequelize');
const { createUrl } = require('../../helpers');

const Book = (sequelize) => {
  const BookModel = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
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

  BookModel.beforeValidate(({ title, author }) => {
    if (!title) throw new Error('Title name can not be empty.');

    if (!author) throw new Error('Author name can not be empty.');
  });

  BookModel.beforeCreate((book) => {
    book.url = createUrl(book.title);
  });
};

module.exports = Book;
