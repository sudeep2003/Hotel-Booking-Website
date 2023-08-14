import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { availableSingleRoom } from '../database/roomsAvailable.js';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

export async function check(req, res){
    var sd = req.body.start;
    var ed = req.body.end;
    var id = req.body.room_id;

    var available = availableSingleRoom(id, sd, ed)

    var json1 = {
        "ok": available,
        "message": "",
        "roomID": id,
        "startDate": sd,
        "endDate": ed
    }

    res.json(json1)
}