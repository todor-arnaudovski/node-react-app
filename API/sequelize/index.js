const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/myAppDb.db',
  logQueryParameters: true,
  benchmark: true
});

const modelDefiners = [require('./models/User'), require('./models/Book')];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

const { User, Book } = sequelize.models;

User.hasMany(Book, {
  foreignKey: 'userId',
});
Book.belongsTo(User, {
  foreignKey: 'userId'
});

sequelize.sync();

module.exports = sequelize;
