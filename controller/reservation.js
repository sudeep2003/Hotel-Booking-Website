// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export function reservation(req, res){
    console.log(req.session);
    var startDate = req.session.check_in;
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
    res.redirect('/reservation-summery')
}