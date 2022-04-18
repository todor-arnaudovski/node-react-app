const sequelize = require('../sequelize');
const bookData = require('./bookSeedData.json');

const seedBooks = async () => {
  console.log(
    'Will rewrite the SQLite example database, adding some dummy data.'
  );

  await sequelize.sync({ force: true });

  for (let book of bookData) {
    const bookTitleArr = book.title.split(' ');
    const bookTitleArrCap = []

    for (let word of bookTitleArr) {
      const wordCap = word.charAt(0).toUpperCase() + word.slice(1);
      bookTitleArrCap.push(wordCap);
    }
    
    const bookTitleCap = bookTitleArrCap.join(' ');

    const newBook = await sequelize.models.Book.build({
      title: bookTitleCap,
      author: book.author,
      published: book.published,
      userId: book.userId,
    });

    newBook.save();
    console.log(`${newBook.title} was saved to the database!`);
  }
};

module.exports = seedBooks;
