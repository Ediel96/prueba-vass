const cors = require('cors');
require('dotenv').config();
const mysqlConnection = require('../config/database')

const getAll = () => {
    return new Promise ((resolver, reject) =>{
        mysqlConnection.query('SELECT * FROM users', (err, rows) => {
            if(err) reject(err)
            resolver(rows);
        })
    })
}

const getEmail = (email) => {
    return new Promise ((resolver, reject) =>{
        mysqlConnection.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
            if(err) reject(err)
            resolver(rows[0]);
        })
    })
}

module.exports = {
    getAll: getAll,
    getEmail: getEmail
}