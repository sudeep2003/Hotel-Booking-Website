//jshint esversion:6

import express from 'express';
import { index } from './controller/index.js';

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', index);

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
    res.render('reservation_summary');
});

app.listen(3000,()=>{
    console.log("This is running on port 3000.");
})