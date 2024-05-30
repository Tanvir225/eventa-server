const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

//schema call
const userSchema = require('../../Schema/userSchema')

//model
const users = mongoose.model('users',userSchema)

//middleware
const verifyToken = require('../../middleware/verifyToken')

router.get("/users/:email",verifyToken,async(req,res)=>{
    const email = req.params.email;
    if (email !== req?.decodedUser?.email) {
        return res.status(401).json({message:"Unauthorized access" })
    }

    const query = {email:email};
    const user = await users.findOne(query);
    console.log(user);
   
    if (user) {
        res.send({
            isAdmin : user?.role === 'admin',
            isVendor : user?.role === 'vendor',
            isVendorSatus : user?.status === 'pending',
            role : user?.role
        })
    }
    else{
        res.status(404).send({message:"user not found"})
    }


    
})


module.exports = router