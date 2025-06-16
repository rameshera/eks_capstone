const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'hello_db'
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as time');
    res.send(`Hello from EKS! *******V2******** Database time: ${result.rows[0].time}`);
  } catch (err) {
    res.send(`Hello from EKS! *************V2********* Database connection error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
