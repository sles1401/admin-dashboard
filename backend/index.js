const express = require('express');
const cors = require('cors');
const db = require('./db');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

// Start server
db.initialize()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('Error initializing the database:', err);
  });
