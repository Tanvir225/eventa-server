const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)



router.get("/vendor-area",(req,res)=>{
    const type = users.schema.path('area').options.area;
    res.status(200).send(type)
})

module.exports = router