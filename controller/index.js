import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export function index(req, res) {

  res.render('index');
}

export function post_index(req, res) {
  const check_in = req.body.start;
  const check_out = req.body.check_out;
  console.log(check_in,check_out);
  req.session.check_in = check_in;
  req.session.check_out = check_out;
  res.redirect('/reservation')
}