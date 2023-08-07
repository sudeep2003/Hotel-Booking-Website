import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { availableRooms } from '../database/roomsAvailable.js';
import rooms_type from '../database/rooms.js';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export function index(req, res) {

  res.render('index', {error: ''});
}

export async function post_index(req, res) {
  const check_in = req.body.start;
  const check_out = req.body.check_out;
  console.log(check_in,check_out);
  if (check_in === '' || check_out === '') {
    res.render('index', {error: 'Please choose check-in and check-out date'});
  } else if (check_in > check_out) {
    res.render('index', {error: 'Check-in date must be before check-out date'});
  } else {
    req.session.check_in = check_in;
    req.session.check_out = check_out;
    const rooms = await availableRooms(check_in,check_out);
    res.render('choose_room', {rooms:rooms})
  }
}