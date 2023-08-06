import { Room } from "../models/models.js";

export default async function roomNameByRoomID (roomID){
    console.log(roomID);
    const room = await Room.findById(roomID).exec();
    console.log(room, room.roomName);
    return room.roomName;
}