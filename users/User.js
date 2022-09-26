const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: Number
})



module.exports = mongoose.model('Users', UserSchema)