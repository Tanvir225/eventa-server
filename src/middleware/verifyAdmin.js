const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');


//schema call
const userSchema = require('../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)


router.use(async(req,res,next)=>{
    const email = req?.decodedUser?.email
    const query = {email:email}
    const user = await users.findOne(query)
    const isAdmin = user?.role  === 'admin'
    if(!isAdmin){
        return res.status(403).json({message:'forbidden access.'})
    }

    next()

})

module.exports = router