const { Router, request } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const mysqlConnection = require('../config/database');
const Users = require('../models/users');
const jwt = require('jwt-simple');
const moment = require('moment');
const jwtSecret = require('./../config/jwt')


// GET all Employees
router.get('/', async (req, res) => {
  const users = await Users.getAll();
  res.json(users)
});

router.post('/register', (req, res) => {
  console.log(req.body);
  const { email, user_name, edi_permit } = req.body;
  // req.body.password = bcrypt.hashSync(req.body.password, 10);
  const password = req.body.password = bcrypt.hashSync(req.body.password, 10);
  mysqlConnection.query('INSERT INTO users (email, password, user_name, id_permit) VALUES (?, ?, ?, ?)' ,[email, password, user_name, edi_permit] , (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

/*
router.post('/login', (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  mysqlConnection.query('SELECT * FROM employee.users WHERE email = ?' ,[email] , (err, rows, fields) => {
    if(!err) {
      const equals =  bcrypt.compareSync(req.body.password , rows[0].password)
      console.log(rows[0].password)
        if(!equals){
          res.json({err:'Error en la contraseña'});
        }else{
          res.json(rows);
        }
      
    } else {
      console.log(err);
    }
  });  
});

*/

const createToken = (user) => {
  let payload = {
    userId: user.id,
    createAt : moment().unix(),
    expireAt : moment().add(1,'day').unix()
  }

  return jwt.encode(payload , jwtSecret);
}


router.post('/login', async (req, res) => {
  console.log(req.body)
  const user = await Users.getEmail(req.body.email);
  if (user === undefined){
    res.json({
      error : 'Error, email or password not found'
    })
  }else{
    const equals = bcrypt.compareSync(req.body.password, user.password);
    if(!equals){
      res.json({
        erro: 'Error, en la contraseña'
      })
    }else{
      res.json({
        user: user,
        token: createToken(user),
        done: 'login correct'
      })
    }
  }
});

module.exports = router;