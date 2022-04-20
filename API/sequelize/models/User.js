const { DataTypes } = require('sequelize');
const { createUrl, capitalize } = require('../../helpers');

const User = (sequelize) => {
  const UserModel = sequelize.define(
    'User',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'User already exists'
        }
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'First name cannot be null',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Last name cannot be null',
          },
        },
      },
      interests: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  UserModel.prototype.capitalize = function () {
    this.firstName = capitalize(this.firstName);
    this.lastName = capitalize(this.lastName);
  };

  UserModel.prototype.createUrl = function () {
    const firstAndLastName = `${this.firstName} ${this.lastName}`;
    this.url = createUrl(firstAndLastName);
  };
};

module.exports = User;
