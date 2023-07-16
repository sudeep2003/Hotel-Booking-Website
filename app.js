//jshint esversion:6

const express = require("express");

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/rooms', (req, res) => {
    res.render('rooms');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/reservation', (req, res) => {
    res.render('reservation');
});

app.get('/reservation-summary', (req, res) => {
    res.render('reservation-summary');
});

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})