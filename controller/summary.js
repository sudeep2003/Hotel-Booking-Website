import express from 'express';
import reservationDataBase from '../database/reservations.js';
// import { res1 } from '../models/templateData.js';

const app = express();

export function summary(req, res){
    console.log(req.session);
    const reservationData = req.session.reservationData;

    const roomName = req.session.roomName;
    const reservation_summary_object = {
        "firstName": reservationData.firstName,
        "lastName": reservationData.lastName,
        "email": reservationData.email,
        "Phone": reservationData.phone,
        "startDate": reservationData.check_in,
        "endDate": reservationData.check_out,
        "roomID": reservationData.roomID
    }

    const Name = `${reservation_summary_object.firstName} ${reservation_summary_object.lastName}`;

    console.log(reservation_summary_object.roomID);

    reservationDataBase(reservation_summary_object)

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
        startDate: reservation_summary_object.startDate,
        endDate: reservation_summary_object.endDate,
        email: reservation_summary_object.email,
        Phone: reservation_summary_object.Phone
    });
}