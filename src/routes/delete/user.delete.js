const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)

//middleware
const verifyToken = require('../../middleware/verifyToken')
const verifyAdmin = require('../../middleware/verifyAdmin')

router.delete("/users/:email",verifyToken,verifyAdmin,async(req,res)=>{
    const email = req.params.email
    const result = await users.deleteOne({email:email})
    res.send(result)
})

module.exports = router