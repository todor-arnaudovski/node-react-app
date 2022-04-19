const sequelize = require('../sequelize');
const userData = require('./seedData/userSeedData.json');
const { capitalize, createUrl } = require('../helpers');

const seedUsers = async () => {
  console.log('\u001b[1;34m Seeding user data. \u001b[0m');

  await sequelize.sync({ force: true });

  for (let user of userData) {
    try {
      const firstAndLastName = `${user.firstName} ${user.lastName}`;

      const newUser = await sequelize.models.User.build({
        firstName: capitalize(user.firstName),
        url: createUrl(firstAndLastName),
        lastName: capitalize(user.lastName),
        interests: user.interests,
      });

      newUser.save();
    } catch (err) {
      console.log(err.message);
    }
  }
};

module.exports = seedUsers;
