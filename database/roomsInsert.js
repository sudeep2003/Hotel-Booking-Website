import express from "express";
import mongoose from "mongoose";
import { Room } from "../models/models.js";

const app = express()

export default async function roomsinsert(){
    try{
        Room.insertMany([
            {roomName: "Premium King Room"},
            {roomName: "Deluxe Room"},
            {roomName: "Double Room"},
            {roomName: "Luxury Room"},
            {roomName: "Room With View"},
            {roomName: "Small View"},
        ])
    }
    catch(e){
        console.log(e)
    }
}