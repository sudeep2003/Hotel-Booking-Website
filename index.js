const express = require("express");

const app = express();

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/pages/index.html`);
})

app.get("/rooms",(req,res)=>{
    res.sendFile(`${__dirname}/pages/rooms.html`);
})
app.get("/blog",(req,res)=>{
    res.sendFile(`${__dirname}/pages/blog.html`);
})
app.get("/contact",(req,res)=>{
    res.sendFile(`${__dirname}/pages/contact.html`);
})

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})