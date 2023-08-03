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
    console.log(roomID);
    var roomName = roomNameByRoomID(roomID);
    req.session.roomName = roomName;

    console.log(startDate, endDate);
    roomRestrictionStore(startDate,endDate);

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
    // const id = roomID;
    if (id = 1){
        const roomName = 'Double Room';
        return roomName;
    } else if (id = 2) {
        const roomName = 'Premium King Room';
        return roomName;
    } else if (id = 3) {
        const roomName = 'Deluxe Room';
        return roomName;
    } else if (id = 4) {
        const roomName = 'Family Room';
        return roomName;
    } else if (id = 5) {
        const roomName = 'Room with View';
        return roomName;
    } else {
        const roomName = 'Small View';
        return roomName;
    }
}