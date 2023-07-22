import express from 'express';

const app = express();

export function summary(req, res){
    console.log(req.session);
    const reservationData = req.session.reservationData;
    // console.log(reservationData);

    // const firstName = req.session.firstName;

    // const firstName= req.session.firstName;
    // const lastName = req.session.lastName;
    // const Name = `${firstName} ${lastName}`;
    // const email = req.session.email;
    // const Phone = req.session.phone;

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