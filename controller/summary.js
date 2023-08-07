import express from 'express';
import reservationDataBase from '../database/reservations.js';
import { reservation } from './reservation.js';
import roomRestrictionStore from '../database/roomrestrictions.js';
// import { res1 } from '../models/templateData.js';

const app = express();

export async function summary(req, res){
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

    const reservationId = await reservationDataBase(reservation_summary_object)

    const roomRestriction = {
        "startDate": reservationData.check_in,
        "endDate": reservationData.check_out,
        "roomId": reservationData.roomID,
        "reservationId": reservationId,
        "restrictionId": 1
    }

    roomRestrictionStore(roomRestriction)

    const Name = `${reservation_summary_object.firstName} ${reservation_summary_object.lastName}`;

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