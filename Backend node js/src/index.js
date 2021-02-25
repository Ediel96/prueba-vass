  
const express = require('express');
const cors = require('cors');
const app = express();

var employee = require('./routes/employees')
var users = require('./routes/users')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors());


// Routes
// app.use('/customers', customers);
app.use('/employee', employee);
app.use('/users', users);

app.get('/', function (req, res) {
  res.send('root');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});