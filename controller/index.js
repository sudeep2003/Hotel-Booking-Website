import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

const app = express();

app.use(session({
  secret: 'random_string',
  resave: false,
  saveUninitialized: true,
}));

export function index(req, res) {

  res.render('index');
}

export function post_index(req, res) {
  const check_in = req.body.check_in;
  const check_out = req.body.check_out;

  const sessionData = req.session;

  sessionData.check_in = check_in;
  sessionData.check_out = check_out;

  res.redirect('/reservation');
}