// const express = require("express");
import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'random_string',
    resave: false,
    saveUninitialized: true,
  }));

export function reservation(req, res){
    const sessionData = req.session

    const startDate = String(sessionData.check_in);
    const endDate = String(sessionData.check_out);

    res.render('reservation', {startDate, endDate});
}

export function post_reservation(req, res){
    const reservationData = {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "phone":req.body.phone
    }

    req.session.reservationData=reservationData;
}