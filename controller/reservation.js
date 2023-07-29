// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import roomRestrictionStore from '../database/roomrestrictions.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export function reservation(req, res){
    console.log(req.session);
    var startDate = req.session.check_in;
    var endDate = req.session.check_out;
  
    console.log(startDate, endDate);
    roomRestrictionStore(req);
  
    res.render('reservation', {
        startDate: startDate,
        endDate: endDate
    });
  }

export function post_reservation(req, res){
    const reservationData = {
        "firstName":req.body.first_name,
        "lastName":req.body.last_name,
        "email":req.body.email,
        "phone":req.body.phone
    }

    // const firstName=req.body.first_name;
    // const lastName=req.body.last_name;
    // const email=req.body.email;
    // const phone=req.body.phone;

    req.session.reservationData = reservationData;

    // console.log(firstName,lastName,email,phone)

    // req.session.firstName = firstName;
    // req.session.lastName = lastName;
    // req.session.email = email;
    // req.session.phone = phone;    

    res.redirect('/reservation-summary')
}