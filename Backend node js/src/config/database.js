
const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    password: '',
    database: 'employee',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
    return;
    } else {
        console.log('db is connected');
    }
});


module.exports = mysqlConnection;
// module.exports = jwtSecret;

