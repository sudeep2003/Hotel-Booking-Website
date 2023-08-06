import express from 'express';
import reservationDataBase from '../database/reservations.js';
// import { res1 } from '../models/templateData.js';

const app = express();

export function summary(req, res){
    console.log(req.session);
    const reservationData = req.session.reservationData;

    const roomName = req.session.roomName;
    const res1 = {
        "firstName": reservationData.firstName,
        "lastName": reservationData.lastName,
        "email": reservationData.email,
        "Phone": reservationData.phone,
        "startDate": reservationData.check_in,
        "endDate": reservationData.check_out,
        "roomID": reservationData.roomID
    }
    const Name = `${firstName} ${lastName}`;

    console.log(roomID);

    reservationDataBase(res1)

    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Session is successfully destroyed.s");
        }
    })
    res.render('reservation_summary',{
        roomName: roomName,
        Name: Name,
        startDate: startDate,
        endDate: endDate,
        email: email,
        Phone: Phone
    });
}