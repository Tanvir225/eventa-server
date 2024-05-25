const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)

//middleware
const verifyToken = require('../../middleware/verifyToken')

router.get("/users",verifyToken,async(req,res)=>{
    const result = await users.find().sort({createdAt:-1})
    res.send(result)
})


module.exports = router