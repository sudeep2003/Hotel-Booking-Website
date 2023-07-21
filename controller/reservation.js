// const express = require("express");
import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'random_string',
    resave: false,
    saveUninitialized: true,
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export function reservation(req, res){
    // const sessionData = req.session

    var s = req.session.check_in;
    var startDate = toString(s);
    var endDate = req.session.check_out;

    console.log(startDate);

    res.render('reservation', {
        startDate: startDate,
        endDate: endDate
    });
}

export function post_reservation(req, res){
    const reservationData = {
        "firstName":toString(req.body.first_name),
        "lastName":toString(req.body.last_name),
        "email":toString(req.body.email),
        "phone":toString(req.body.phone)
    }

    // const reservationData = {
    // const firstName=toString(req.body.first_name);
    // const lastName=toString(req.body.last_name);
    // const email=toString(req.body.email);
    // const phone=toString(req.body.phone);
    // }

    const sessionData = req.session;

    // sessionData.firstName = firstName;
    // sessionData.lastName=lastName;
    // sessionData.email=email;
    // sessionData.phone=phone;
    sessionData.reservationData=reservationData;

    // res.redirect('/reservation-summary');
}