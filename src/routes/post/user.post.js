const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema import
const userSchema = require('../../Schema/userSchema')

//create a model for users
const User = mongoose.model('users', userSchema)

//post data into database
router.post("/users", async (req, res) => {
    const userData = req.body
    try {
        //create an instance of this model
        const newUser = new User(userData)

        //check exist user or not
        const isExistUser = await User.findOne({ email: userData?.email })
        //console.log(isExistUser);
        //save user into database
        if (!isExistUser) {
            const result = await newUser.save();
            res.send(result)
            
        }
        else {
            res.send({ message: 'user is exist' })
        }

    }
    catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send({ message: "Saving error" })
    }
})

module.exports = router