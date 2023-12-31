//jshint esversion:6
//Dotenv
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import { index, post_index } from './controller/index.js';
import { reservation, post_reservation } from './controller/reservation.js';
import { summary } from "./controller/summary.js";
import { choose_room } from "./controller/choose_room.js";
import session from "express-session";
import { check } from "./controller/check.js";
import { post_room_details, room_details } from "./controller/room_details.js";

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', index);
app.post('/', post_index);

app.get('/rooms', (req, res) => {
    res.render('rooms');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/room-details', room_details);
app.post('/room-details', post_room_details);

app.get('/reservation', reservation);
app.post('/reservation', post_reservation);

app.get('/reservation-summary', summary);
app.get('/choose-room/:id', choose_room);

app.post('/availability-json', check);

app.listen(process.env.PORT,()=>{
    console.log("This is running on port 3000.");
})