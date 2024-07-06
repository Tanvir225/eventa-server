const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//hallSchema call
const hallSchema = require('../../Schema/hallSchema')

//create a model for hallSchema
const Hall = mongoose.model('hall',hallSchema)

router.patch('/hall',async(req,res)=>{
    console.log('hall patch router hitting');
})


module.exports = router