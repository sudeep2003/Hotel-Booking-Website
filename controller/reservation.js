const express = require("express");

const app = express();

app.get("/reservation",(req,res)=>{
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
})

