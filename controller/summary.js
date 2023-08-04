import express from 'express';
import reservationDataBase from '../database/reservations.js';

const app = express();

export function summary(req, res){
    console.log(req.session);
    const reservationData = req.session.reservationData;

    const roomName = req.session.roomName;

    const firstName= reservationData.firstName;
    const lastName = reservationData.lastName;
    const Name = `${firstName} ${lastName}`;
    const email = reservationData.email;
    const Phone = reservationData.phone;

    const startDate = req.session.check_in;
    const endDate = req.session.check_out;
    const roomID = req.session.roomID;

    console.log(roomID);

    reservationDataBase(firstName,lastName,email,Phone,startDate,endDate,roomID)

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