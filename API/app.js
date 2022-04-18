const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');

// Seeders
// const seedUsers = require('./data/seedUsers');
// const seedBooks = require('./data/seedBooks');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Controllers
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Routes
app.get('/api', (req, res) => {
  res.send('Users api');
});

app.get('*', (req, res) => {
  res.send('404 Not found');
});

// Test the db connection and init app;
const init = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database successful');
  } catch (e) {
    console.log('Unable to connect to database');
    console.log(e.message);
    process.exit(1);
  }

  // Seed database
  // seedUsers();
  // seedBooks();

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

init();