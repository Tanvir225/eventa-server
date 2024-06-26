const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)



router.get("/vendor-types",(req,res)=>{
    const type = users.schema.path('vendor').options.vendorType;
    res.status(200).send(type)
})

module.exports = router