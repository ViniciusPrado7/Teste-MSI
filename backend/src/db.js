const mysql = require('mysql2');

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connect.connect((error) => {
    if (error) {
        throw error
    }
    console.log(`Banco de dados conectado na database: ${process.env.DB_NAME}`)
})

module.exports = connect.promise();