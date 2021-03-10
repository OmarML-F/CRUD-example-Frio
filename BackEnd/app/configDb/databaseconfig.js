const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "9184",
    database: "usuarios",
    host: "localhost",
    port: 5432   
});

module.exports = pool;