const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../config/database')

// GET all Employees
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