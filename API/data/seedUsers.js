const sequelize = require('../sequelize');

const seedUsers = async () => {
  console.log(
    'Will rewrite the SQLite example database, adding some dummy data.'
  );

  await sequelize.sync({ force: true });
};

export default seedUsers;