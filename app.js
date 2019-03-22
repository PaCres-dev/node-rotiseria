
const express      = require('express');
const session      = require('express-session');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require('cors');
const mongoose     = require('mongoose');
const bodyParser   = require('body-parser');
const bcrypt       = require('bcrypt-nodejs');
const nodemailer   = require('nodemailer');

const app          = express();

app.use(cors({
	origin: ['http://localhost:4200', 'http://120.0.0.1:4200'],
	credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
	name: 'whyareyouhere.sid',
	secret: 'shh, it is a secret', 
	resave: true, 
	saveUninitialized: true,
	cookie: {
		maxAge: 36000000000,
		httpOnly: false,
		secure: false
	}
}));

const urldb= 'mongodb+srv://PaCres:Riverkpo1998-@losabuelos-spool.mongodb.net/test?retryWrites=true' || 'mongodb://localhost/losabuelos'; 

mongoose.connect(urldb, { useNewUrlParser: true, useCreateIndex: true }, function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

const routesU = require('./routes/users')(app);
const routesA = require('./routes/auth')(app);
const routesM = require('./routes/messages')(app);
const routesF = require('./routes/foods')(app);
const routesO = require('./routes/orders')(app);

module.exports = app;
