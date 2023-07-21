import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


app.use(session({
  secret: 'random_string',
  resave: false,
  saveUninitialized: true,
}));

export function index(req, res) {

  res.render('index');
}

export function post_index(req, res) {
  const check_in = req.body.start;
  const check_out = req.body.check_out;

  req.session.check_in = check_in;
  req.session.check_out = check_out;

  res.redirect('/reservation');
}