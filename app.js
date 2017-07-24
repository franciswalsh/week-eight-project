const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const routes = require("./routes");
const models = require('./models')
const loginSignup = require('./loginSignupFunctions.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());

app.use(session({
  // genid: function(req),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname));
app.use('/static', express.static('static'));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

// app.use(morgan('dev'))

app.use(routes);

app.get('/', function(req, res){
  res.redirect('/homescreen/');
})


app.listen(3000, function(){
  console.log('Successfully started express application!');
})
