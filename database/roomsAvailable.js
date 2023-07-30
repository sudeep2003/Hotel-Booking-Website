import express from 'express';
import mongoose from 'mongoose';
import {Room} from '../models/models.js'
import rooms_type from './rooms.js';


const app = express();

export async function availableRooms(arrivalDate, departureDate){

    const Rooms_type = rooms_type();

    console.log(Rooms_type)

    const UnavailableRooms = await Room.find({
        unavailableFrom: { $gte: arrivalDate },
        unavailableTo: { $lte: departureDate }
    });

    for (const room of UnavailableRooms) {
        Rooms_type[room.roomName]--;
    }

    for (const key in Rooms_type) {
        if (Rooms_type[key] <= 0) {
            delete Rooms_type[key];
        }
    }

    const Rooms_array = Object.keys(Rooms_type);
    console.log(Rooms_array)
    return Rooms_array;
}

export async function availableSingleRoom(singleRoom,arrivalDate, departureDate){

    const Rooms_type = rooms_type();
    const Single_room = singleRoom;

    console.log(Rooms_type, Single_room)

    const availableSingleRoom = await Room.findOne({
        roomName:Single_room,
        availableFrom: { $gte: arrivalDate },
        availableTo: { $lte: departureDate }
    });
    
    if (availableSingleRoom) {
        // Item is available within the specified date range
        console.log(`${Single_room} is available.`);
        return false;
    } else {
        // Item is not available within the specified date range
        console.log(`${Single_room} is not available.`);
        return true;
    }
}