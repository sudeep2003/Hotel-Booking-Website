import express from 'express';
import mongoose from 'mongoose';
import {RoomRestriction} from '../models/models.js'

const app = express();

export default async function roomRestrictionStore(restriction){
    const roomRestriction = new RoomRestriction({
        startDate: restriction.startDate,
        endDate: restriction.endDate,
        roomId: restriction.roomId,
        reservationId: restriction.reservationId,
        restrictionId: restriction.restrictionId,
        // createdAt: Date,
        // updatedAt: Date,
        // room: { type:Schema.Types.ObjectId, ref:'Room'},
        // reservation: { type:Schema.Types.ObjectId, ref:'Reservation'},
        // restriction: { type:Schema.Types.ObjectId, ref:'Restriction'},
    });

    await roomRestriction.save();
}