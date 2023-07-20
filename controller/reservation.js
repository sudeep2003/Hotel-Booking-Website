// const express = require("express");
import express from 'express';
import session from 'express-session';

const app = express();

export function reservation(req, res){
    const startDate = req.session.check_in;
    const endDate = req.session.check_out;

    res.render('reservation', {startDate: startDate, endDate: endDate});
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