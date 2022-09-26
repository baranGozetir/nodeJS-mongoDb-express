const mongoose = require('mongoose');
//const dotenv = require('dotenv')
const url = 'mongodb://localhost:27017/nodejs-mongodb-express'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('veri tabanina baglandi')
})
.catch((err) => {
    console.log('veri tabanina baglanilamadi' + err);
})