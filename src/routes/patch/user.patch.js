const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')


//model
const users = mongoose.model('users',userSchema)
//const verifyToken = require("../../middleware/verifyToken")
//const verifyAdmin = require("../../middleware/verifyAdmin")

router.patch("/users/:email",async(req,res)=>{
    const email = req.params.email
    const update = req.body
    //console.log(update);
    const result = await users.updateOne({email:email},update,{upsert:true})
    res.send(result)
})

module.exports = router