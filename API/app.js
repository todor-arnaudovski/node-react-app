const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const seedDatabase = () => {
  // Seeders
  const seedUsers = require('./data/seedUsers');
  const seedBooks = require('./data/seedBooks');

  // Seed database
  seedUsers();
  seedBooks();
};

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // limit each IP to 2 requests per windowMs
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(apiRequestLimiter);
app.use(helmet());

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
    console.log('\u2713 Connection to database successful');
  } catch (e) {
    console.log('Unable to connect to database');
    console.log(e.message);
    process.exit(1);
  }

  // seedDatabase();

  app.listen(port, () => {
    console.log(
      `\n \u001b[1;32m === APP IS RUNNING ON PORT ${port} === \u001b[0m \n _`
    );
  });
};

init();
