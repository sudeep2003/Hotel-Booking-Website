import { availableSingleRoom } from "../database/roomsAvailable";

export function avsiro(sd, ed, id) {
    let av = availableSingleRoom(id, sd, ed);
    return av
}