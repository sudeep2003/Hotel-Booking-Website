// const express = require("express");
import express from 'express';

const app = express();

export function reservation(req, res){

    // const firstName = req.body.first_name;
    // const lastName = req.body.last_name;
    // const email = req.body.email;
    // const phone = req.body.phone;

    res.render('reservation',
    // {
    //     firstName,
    //     lastName,
    //     email,
    //     phone
    // }
    );
}