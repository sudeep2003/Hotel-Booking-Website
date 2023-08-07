import express from 'express';

// <-- Adding Mongodb -->

import mongoose, { Mongoose, Schema } from 'mongoose';
import dotenv from 'dotenv';
// const mongoose = require('mongoose');

dotenv.config();

const uri = process.env.DATABASE_ADDRESS;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
}

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    accessLevel: Number
})

const RoomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roomName:String,
    createdAt: Date,
    updatedAt:Date,
})

const RestrictionSchema = new mongoose.Schema({
    restrictionName: String,
    createdAt: Date,
    updatedAt: Date
})

const ReservationSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    phone: String,
    startDate: Date,
    endDate: Date,
    roomId: String,
    createdAt: Date,
    updatedAt: Date,
    room: { type: Schema.Types.ObjectId, ref:'Room'},
})

const RoomRestrictionSchema= new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    roomId: Number,
    reservationId: Number,
    restrictionId: Number,
    createdAt: Date,
    updatedAt: Date,
    room: { type:Schema.Types.ObjectId, ref:'Room'},
    reservation: { type:Schema.Types.ObjectId, ref:'Reservation'},
    restriction: { type:Schema.Types.ObjectId, ref:'Restriction'},
})

const User = mongoose.model('User', UserSchema);
const Room = mongoose.model('Room',RoomSchema);
const Reservation = mongoose.model('Reservation', ReservationSchema);
const Restriction = mongoose.model('Restriction',RestrictionSchema);
const RoomRestriction = mongoose.model('RoomRestriction',RoomRestrictionSchema);

export { User, Room, Reservation, Restriction, RoomRestriction };

//<-- End Mongodb -->