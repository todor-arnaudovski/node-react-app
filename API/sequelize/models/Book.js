const { DataTypes } = require('sequelize');
const { createUrl, capitalize } = require('../../helpers');

const Book = (sequelize) => {
  const BookModel = sequelize.define(
    'Book',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Book already exists'
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Title cannot be empty',
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Author cannot be empty',
          },
        },
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
};

module.exports = Book;
