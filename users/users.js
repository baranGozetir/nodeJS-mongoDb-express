const express = require('express');

const router = express.Router()
const User = require('./User')


router.get('/', (req,res)=>{
    User.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err})
    });
});

router.post('/', (req,res)=>{
    const user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err})
    })
})




module.exports = router