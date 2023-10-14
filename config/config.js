const { Pool } = require("pg")

const pool = new Pool({
    user: "mac",
    host: "localhost",
    database: "movies-database",
    password: "nopassword",
    port: 5432
})

module.exports = pool;