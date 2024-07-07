const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const hallSchema = require('../../../Schema/hallSchema')

//model
const Hall = mongoose.model('hall',hallSchema)



router.get("/hall-facalities",(req,res)=>{
    const type = Hall.schema.path('facalities').options.types;
    res.status(200).send(type)
})

module.exports = router