import express from 'express';
const app = express();
export default function Rooms_content(){
    let Rooms = []
    return Rooms = [{
        roomName:"Premium King Room",
        price:159,
        img_src:"room-1.jpg",
        Size:"30 ft",
        Max_person: 3,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    },{
        roomName:"Deluxe Room",
        price:159,
        img_src:"../public\img\room\room-2.jpg",
        Size:"30 ft",
        Max_person: 5,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    },{
        roomName:"Double Room",
        price:159,
        img_src:"../public\img\room\room-3.jpg",
        Size:"30 ft",
        Max_person: 2,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    },{
        roomName:"Luxury Room",
        price:159,
        img_src:"../public\img\room\room-4.jpg",
        Size:"30 ft",
        Max_person: 1,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    },{
        roomName:"Room With View",
        price:159,
        img_src:"../public\img\room\room-5.jpg",
        Size:"30 ft",
        Max_person: 1,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    },{
        roomName:"Small View",
        price:159,
        img_src:"../public\img\room\room-6.jpg",
        Size:"30 ft",
        Max_person: 2,
        Bed:"King Beds",
        Services:"Wifi, Television, Bathroom,..."
    }]
}