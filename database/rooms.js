import express from 'express';
import mongoose from 'mongoose';
import {Room} from '../models/models.js'

const app = express();

export default function rooms_type(){
    return({
    "Premium King Room": 1,
    "Deluxe Room": 1,
    "Double Room": 1,
    "Luxury Room": 1,
    "Room With View": 1,
    "Small View": 1
})
}