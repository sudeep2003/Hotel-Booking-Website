import express from 'express';
import mongoose from 'mongoose';
import {Room} from '../models/models'

const app = express();

const room = new Room({
    roomName:String,
    createdAt: Date,
    updatedAt:Date,
});

await room.save();