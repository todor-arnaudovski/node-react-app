const sequelize = require('../sequelize');
const userData = require('./userSeedData.json');

const seedUsers = async () => {
  console.log(
    'Will rewrite the SQLite example database, adding some dummy data.'
  );

  await sequelize.sync({ force: true });

  for (let user of userData) {
    const newUser = await sequelize.models.User.build({
      firstName: user.firstName,
      lastName: user.lastName,
      interests: user.interests,
    });

    newUser.save();
    console.log(`${newUser.firstName} was saved to the database!`)
  }
};

module.exports = seedUsers;
