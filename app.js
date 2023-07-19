//jshint esversion:6
//Dotenv
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { index, post_index } from './controller/index.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { post_reservation, reservation } from './controller/reservation.js';

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
app.post('/reservation', post_reservation);

app.get('/reservation-summary', (req, res) => {
    const reservationData = req.session.reservationData;
    console.log(reservationData);
    const firstName= reservationData.firstName;
    const lastName = reservationData.lastName;
    const Name= firstName.concat(' ',lastName);
    const emailId = reservationData.email;
    const Phone = reservationData.Phone;

    const Room = "Family-room";
    const arrivalTime = 19;
    const Departure = 20;
    res.render('reservation_summary',{name:Name, emailid:emailId,phno:Phone});
});

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})