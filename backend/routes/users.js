const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

// Endpoint to fetch users
router.get('/', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING
    });

    const result = await connection.execute('SELECT * FROM Pengguna');
    
    if (result && result.rows) {
      res.json(result.rows);
    } else {
      res.status(404).json({ error: 'No data found' });
    }

  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

module.exports = router;
