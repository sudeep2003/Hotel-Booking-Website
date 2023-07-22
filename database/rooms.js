import express from 'express';
import mongoose from 'mongoose';
import {Room} from '../models/models'

const app = express();

export default async function availableRooms(req){

    const arrivalDate = req.session.check_in;
    const departureDate = req.session.check_out;

    const Rooms_type = {
        "Premium King Room": 1,
        "Deluxe Room": 1,
        "Double Room": 1,
        "Luxury Room": 1,
        "Room With View": 1,
        "Small View": 1
    };

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

    return Rooms_array;
}