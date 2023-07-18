//jshint esversion:6

import express from 'express';
import { index } from './controller/index.js';
import { post_index } from './controller/index.js';
import cookieParser from 'cookie-parser';
import { reservation } from './controller/reservation.js';

import session from 'express-session';

const app = express();

app.use(express.static('public'))
app.use(cookieParser());
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true, cookie: { secure: true }}));

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

app.get('/reservation', reservation);

app.get('/reservation-summary', (req, res) => {
    const reservationData=req.session.reservationData;
    res.render('reservation_summary',{reservationData});
});

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})