const mysql = require("mysql2");

//Creating a pool so multiple users can connect instead of creating and deleting for 1 purpose
const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: 'Serenity123',
    database: "portfolio"
});


module.exports = pool.promise();