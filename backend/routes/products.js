const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all products
router.get('/', async (req, res) => {
  const result = await db.executeQuery('SELECT * FROM Produk');
  res.json(result.rows);
});

module.exports = router;
