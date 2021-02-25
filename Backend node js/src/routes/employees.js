const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../config/database')
// const jwtSecret = require('../config/jwt');
const middlewares = require('../middleware/middleware') 

// GET all Employees

router.use(middlewares.checkToken);
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });  
});

module.exports = router;