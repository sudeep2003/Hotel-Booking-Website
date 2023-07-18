import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

const app = express();

export function index(req, res) {
  const check_in = req.body.check_in;
  const check_out = req.body.check_out;
  
  req.session.check_in = check_in;
  req.session.check_out = check_out;
  
  res.render('index');
}