import express from 'express';

const app = express();

export function summary(req, res){
    console.log(req.session);
    const reservationData = req.session.reservationData;

    const firstName= reservationData.firstName;
    const lastName = reservationData.lastName;
    const Name = `${firstName} ${lastName}`;
    const email = reservationData.email;
    const Phone = reservationData.phone;

    const Room = "Family-room";
    var startDate = req.session.check_in;
    var endDate = req.session.check_out;
    res.render('reservation_summary',{
        Name: Name,
        startDate: startDate,
        endDate: endDate,
        email: email,
        Phone: Phone
    });
}