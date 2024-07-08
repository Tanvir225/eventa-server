const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema import
const hallSchema = require('../../../Schema/hallSchema')

//create a model for users
const Hall = mongoose.model('hall', hallSchema)

//post data into database
router.get("/vendor-profile/:email", async (req, res) => {
    const email = req.params.email
    try {
      
        //check exist user or not
        const isExistVendor = await Hall.findOne({ email: email})
        console.log(isExistVendor);
       
        //check status
        if (isExistVendor) {
            res.send(true)
        }
        else {
            res.send(false)
        }

    }
    catch (error) {
        res.status(500).send({ message: "status error" })
    }
})

module.exports = router