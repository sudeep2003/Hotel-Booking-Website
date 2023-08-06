// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import roomRestrictionStore from '../database/roomrestrictions.js';
import roomNameByRoomID from '../database/roomNameByRoomID.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export async function reservation(req, res){
    console.log(req.session);
    const startDate = req.session.check_in;
    const endDate = req.session.check_out;
    const roomID = req.session.roomID;
    console.log(roomID);
    const roomName = await roomNameByRoomID(roomID);
    console.log(roomName);
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