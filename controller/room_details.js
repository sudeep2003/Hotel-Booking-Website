import express from "express";
import bodyParser from "body-parser";
import { availableSingleRoom } from "../database/roomsAvailable.js";

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export function room_details(req, res){
    res.render('room-details', {a: ""});
}

// export function post_room_details(req, res){
//     const startDate = req.body.start_date;
//     const endDate = req.body.end_date;
//     let error = '';
//     if (availableSingleRoom("Premium King Room", startDate, endDate)) {
//         // alert("Room Avaliable")
//         error = "Room Available" ;
//     } else {
//         // alert("Room Not Avaliable")
//         error = "Room Not Available" ;
//     }
//     console.log(error);
//     res.render('room-details',{err: error});
// }

export function post_room_details(req, res){
    const startDate = req.body.start_date;
    const endDate = req.body.end_date;
    let A = '';
    if (availableSingleRoom("Premium King Room", startDate, endDate)) {
        A = "Room Available";
        console.log(A);
        res.render('room-details', { a: A });
    } else {
        A = "Room Not Available";
        console.log(A);
        res.render('room-details', { a: A });
    }
    // console.log(A);
    // res.render('room-details', { a: A });
}
