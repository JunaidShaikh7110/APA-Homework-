const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//middlewear
//app.use('/posts', () =>  {
//   console.log('This is our securito middleweare running');
//});


//routes
app.get('/',(req,res) => {
    res.send('We are at home');
});

app.get('/posts',(req,res) => {
    res.send('We are on posts');z
});

//Connect to Database
mongoose.connect('mongosh "mongodb+srv://cluster0.vnguo.mongodb.net/myFirstDatabase" --username Dragon', () => {
    console.log('Connected to the DB');
    });

//Listening Port
app.listen(8501);