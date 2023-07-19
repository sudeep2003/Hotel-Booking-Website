import express from 'express';

// <-- Adding Mongodb -->

import mongoose, { Mongoose, Schema } from 'mongoose';
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('{process.env.DATABASE_ADDRESS}');
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
    roomId: Number,
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
const RoomRestriction = mongoose.model('RoomRestriction',RoomRestrictionSchema);

//<-- End Mongodb -->