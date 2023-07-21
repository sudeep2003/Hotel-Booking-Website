import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export function index(req, res) {

  res.render('index');
}

export function post_index(req, res) {
  const check_in = req.body.start;
  const check_out = req.body.check_out;

  res.redirect('/reservation');
}