require('dotenv').config();
const { Pool } = require("pg");

const db = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

console.log("Database configuration:");
console.log("User:", process.env.USER);
console.log("Host:", process.env.HOST);
console.log("Database:", process.env.DATABASE);
console.log("Port:", process.env.PORT);

db.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } else {
        console.log('Connected to PostgreSQL database');
    }
    release();
});

module.exports = db;
