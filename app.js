const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./src/config/dataBaseConnection")
const dotenv= require('dotenv')
const userRoute = require('./routes/users')
const bodyParser = require('body-parser')
const port = process.env.PORT || 2121;



app.use(bodyParser.json())

app.use('/user', userRoute)


app.get('/', (req,res)=>{
    res.send('we are at home ')
});




app.listen(port, ()=>{
    console.log(`listening at port ${port} `)
});
