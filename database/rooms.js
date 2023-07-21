import express from 'express';
import mongoose from 'mongoose';
import {Room} from '../models/models'

const app = express();

const rooms = [
    new Room({roomName:"Premium King Room"}),
    new Room({roomName:"Deluxe Room"}),
    new Room({roomName:"Double Room"}),
    new Room({roomName:"Luxury Room"}),
    new Room({roomName:"Room With View"}),
    new Room({roomName:"Small View"})
];

Room.insertMany(rooms, (error, docs) => {
    if (error) {
        console.log(error);
    } else {
        console.log(docs);
    }
});