const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/myAppDb.db',
  logging: false,
});

module.exports = { sequelize };
