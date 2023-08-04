import express from 'express'
import mongoose from 'mongoose'
import {Reservation} from '../models/models'

const app = express();

export default async function reservationDataBase(firstName,lastName,email,Phone,startDate,endDate,roomID){
    const reservation = new Reservation({
        firstName:firstName,
        lastName: lastName,
        email: email,
        phone: Phone,
        startDate: startDate,
        endDate: endDate,
        roomId: roomID,
        // createdAt: Date,
        // updatedAt: Date,
        // room: { type: Schema.Types.ObjectId, ref:'Room'},
    });

    await reservation.save();
}