//jshint esversion:6
//Dotenv
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { index, post_index } from './controller/index.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { post_reservation, reservation } from './controller/reservation.js';

// <-- Adding Mongodb -->

import mongoose, { Mongoose } from 'mongoose';
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('{process.env.DATABASE_ADDRESS}');
}

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    accessLevel: Number
})

const RoomSchema = new mongoose.Schema({
    roomName:String,
    createdAt: Date,
    updatedAt:Date,
})

const RestrictionSchema = new mongoose.Schema({
    restrictionName: String,
    createdAt: Date,
    updatedAt: Date
})

const reservationSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    Phone: String,
    startDate: Date,
    endDate: Date,
    roomId: Number,
    createdAt: Date,
    updatedAt: Date,
    Room: Room,
})

const RoomRestrictionSchema= new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    roomId: Number,
    reservationId: Number,
    restrictionId: Number,
    createdAt: Date,
    updatedAt: Date,
    Room: Room,
    reservation: reservation,
    restriction: restriction,
})

const User = mongoose.model('User', UserSchema);
const Room = mongoose.model('Room',RoomSchema);
const Reservation = mongoose.model('Reservation', reservationSchema);
const RoomRestriction = mongoose.model('RoomRestriction',RoomRestrictionSchema);

//<-- End Mongodb -->


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