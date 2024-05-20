const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)

router.get("/users",async(req,res)=>{
    const result = await users.find().sort({createdAt:-1})
    res.send(result)
})


module.exports = router