const { DataTypes } = require('sequelize');
const { createUrl } = require('../../helpers');

const User = (sequelize) => {
  const UserModel = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
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

  UserModel.beforeValidate(({ firstName, lastName }) => {
    if (!firstName) throw new Error('First name can not be empty.');

    if (!lastName) throw new Error('Last name can not be empty.');
  });

  UserModel.beforeCreate((user) => {
    const firstAndLastName = `${user.firstName} ${user.lastName}`;

    user.url = createUrl(firstAndLastName);
  });
};

module.exports = User;
