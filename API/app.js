const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// MODELS
const User = require('./models/User');

// CONTROLLERS
const userRoutes = require('./routes/users');

app.use('/api/users', userRoutes);

// === ROUTES ===
app.get('/api', (req, res) => {
  res.send('Users api');
});

app.get('*', (req, res) => {
  res.send('404 Not found');
});

// === APP LISTEN ===
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
