const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema import
const hallSchema = require('../../Schema/hallSchema')

//create a model for users
const Hall = mongoose.model('hall', hallSchema)

//post data into database
router.post("/create-profile", async (req, res) => {
    const vendorData = req.body
    try {
        //create an instance of this model
        const newVendor = new Hall(vendorData)

        //check exist user or not
        const isExistVendor = await Hall.findOne({ email: vendorData?.vendor_email })
        //console.log(isExistUser);
        //save user into database
        if (!isExistUser) {
            const result = await newVendor.save();
            res.send(result)
        }
        else {
            res.send({ message: 'vendor is exist' })
        }

    }
    catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send({ message: "Saving error" })
    }
})

module.exports = router