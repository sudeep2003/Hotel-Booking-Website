// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import roomNameByRoomID from '../database/roomNameByRoomID.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export async function reservation(req, res){
    console.log(req.session);
    const startDate = req.session.check_in;
    const endDate = req.session.check_out;
    const roomID = req.session.roomID;
    const roomName = await roomNameByRoomID(roomID);
    req.session.roomName = roomName;

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
        "phone":req.body.phone,
        "check_in":req.session.check_in,
        "check_out":req.session.check_out,
        "roomID":req.session.roomID
    }

    req.session.reservationData = reservationData;

    res.redirect('/reservation-summary')
}