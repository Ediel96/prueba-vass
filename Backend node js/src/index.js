  
const express = require('express');
const cors = require('cors');
const app = express();

var employee = require('./routes/employees')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());



// Routes
// app.use('/customers', customers);
app.use('/employee', employee);

app.get('/', function (req, res) {
  res.send('root');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});