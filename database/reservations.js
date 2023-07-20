import express from 'express'
import mongoose from 'mongoose'
import {Reservation} from '../models/models'

const app = express();

const reservation = new Reservation({
    firstName:String,
    lastName: String,
    email: String,
    phone: String,
    startDate: Date,
    endDate: Date,
    roomId: Number,
    createdAt: Date,
    updatedAt: Date,
    room: { type: Schema.Types.ObjectId, ref:'Room'},
});

await reservation.save();