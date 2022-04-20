const { DataTypes } = require('sequelize');
const { createUrl, capitalize } = require('../../helpers');

const User = (sequelize) => {
  const UserModel = sequelize.define(
    'User',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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

  const validateFields = (user) => {
    if (!user.firstName) throw new Error('First name can not be empty.');
    if (!user.lastName) throw new Error('Last name can not be empty.');
  };

  UserModel.beforeCreate((user) => {
    validateFields(user);
  });

  UserModel.beforeUpdate((user) => {
    validateFields(user);
  });
};

module.exports = User;
