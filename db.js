const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "Charlie1986!",
  port: 5432,
});

module.exports = pool;