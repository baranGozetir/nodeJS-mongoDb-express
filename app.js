const express = require('express');
const app = express();
const mongoose = require('mongoose')
//require("dotenv").config()
const port = process.env.PORT || 2121;


app.get('/', (req,res)=>{
    res.send('we are at home ')
});

app.get('/posts', (req,res)=>{
    res.send('we are at posts ')
})


app.listen(port, ()=>{
    console.log(` ${port} portunda dinleme yapiliyor`)
});
