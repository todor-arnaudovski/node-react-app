const { DataTypes } = require('sequelize');

const Book = (sequelize) => {
  sequelize.define(
    'Book',
    {
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
};

module.exports = Book;
