import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import availableRooms from '../database/rooms.js';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export function choose_room(req, res) {

  var roomID = req.params.id;
  req.session.roomID = roomID;
  res.redirect('/reservation')
}