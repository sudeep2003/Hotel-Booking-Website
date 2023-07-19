import express from 'express';
import session from 'express-session';

const app = express();

export function summary(req, res){
    const reservationData = req.session.reservationData;
    console.log(reservationData);
    const firstName= reservationData.firstName;
    const lastName = reservationData.lastName;
    const Name= firstName.concat(' ',lastName);
    const emailId = reservationData.email;
    const Phone = reservationData.Phone;

    const Room = "Family-room";
    const arrivalTime = 19;
    const Departure = 20;
    res.render('reservation_summary',{name:Name, emailid:emailId,phno:Phone});
}