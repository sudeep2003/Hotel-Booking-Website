import express from 'express';
import mongoose from 'mongoose';
import {RoomRestriction} from '../models/models'

const app = express();

export default async function roomRestrictionStore(req){
    const roomRestriction = new RoomRestriction({
        startDate: startDate,
        endDate: endDate,
        roomId: Number,
        reservationId: Number,
        restrictionId: Number,
        createdAt: Date,
        updatedAt: Date,
        room: { type:Schema.Types.ObjectId, ref:'Room'},
        reservation: { type:Schema.Types.ObjectId, ref:'Reservation'},
        restriction: { type:Schema.Types.ObjectId, ref:'Restriction'},
    });

    await roomRestriction.save();
}