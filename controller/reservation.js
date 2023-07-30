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
    var roomID = req.session.roomID;
    var roomName = roomNameByRoomID(roomID)

    console.log(startDate, endDate);
    roomRestrictionStore(req);

    res.render('reservation', {
        roomName: roomName,
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

    req.session.reservationData = reservationData;

    res.redirect('/reservation-summary')
}

function roomNameByRoomID (id){
    if (id = 1){
        var roomName = 'Double Room';
        return roomName;
    } else if (id = 2) {
        var roomName = 'Premium King Room';
        return roomName;
    } else if (id = 3) {
        var roomName = 'Deluxe Room';
        return roomName;
    } else if (id = 4) {
        var roomName = 'Family Room';
        return roomName;
    } else if (id = 5) {
        var roomName = 'Room with View';
        return roomName;
    } else {
        var roomName = 'Small View';
        return roomName;
    }
}