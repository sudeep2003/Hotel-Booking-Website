import express from 'express'
import mongoose from 'mongoose'
import {Reservation} from '../models/models'
// import { res1 } from '../models/templateData';

const app = express();

export default async function reservationDataBase(res1){
    const reservation = new Reservation({
        firstName:res1.firstName,
        lastName: res1.lastName,
        email: res1.email,
        phone: res1.Phone,
        startDate: res1.startDate,
        endDate: res1.endDate,
        roomId: res1.roomID,
        // createdAt: Date,
        // updatedAt: Date,
        // room: { type: Schema.Types.ObjectId, ref:'Room'},
    });

    await reservation.save();
}