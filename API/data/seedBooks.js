const sequelize = require('../sequelize');
const bookData = require('./seedData/bookSeedData.json');
const { createUrl, capitalize } = require('../helpers/');

const seedBooks = async () => {
  console.log(
    '\u001b[1;34m Seeding book data. \u001b[0m'
  );

  await sequelize.sync({ force: true });

  for (let book of bookData) {
    try {
      const publishedDate = new Date(book.published);

      const newBook = await sequelize.models.Book.build({
        title: capitalize(book.title),
        url: createUrl(book.title),
        author: book.author,
        published: publishedDate,
        userId: book.userId,
      });

      console.log(capitalize(book.title));

      newBook.save();
    } catch (err) {
      console.log(err.message);
    }
  }
};

module.exports = seedBooks;
