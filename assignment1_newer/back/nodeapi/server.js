//backend server


var express = require('express')
  app = express()
  port = process.env.PORT || 3427
  mongoose = require('mongoose')
  User = require('./models/contactModel')
  bodyParser = require('body-parser')

  const cors = require('cors');
  app.use(cors())

mongoose.Promise = global.Promise
// mongoose.connect('mongodb+srv://user1000:asdf1234@cluster0.i2dmzen.mongodb.net/')
mongoose.connect('mongodb+srv://pongsapak:Mongodb_123@cluster0.bjfzyrx.mongodb.net/ContactList')

  .then(() => console.log('DB Successfully connected'))
  .catch(error => console.log(error));


  // For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/contactRoutes')
routes(app)

app.listen(port)
console.log('User List API started on : '+ port)
//========================//


// mongoose.set('strictQuery', true);