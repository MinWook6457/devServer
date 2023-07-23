const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost:3000',
    user: 'root',
    password: 'root',
    database: 'myDB'
});
db.connect();

module.exports = db;