import { Room } from "../models/models.js";

export default async function roomNameByRoomID (roomID){
    const roomName = await Room.findById(roomID).exec();
    console.log(roomName);
    return roomName;
}