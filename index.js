const express = require("express");

const app = express();

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/pages/index.html`);
})

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})