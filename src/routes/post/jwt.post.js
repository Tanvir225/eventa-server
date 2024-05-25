const express = require('express');
const router = express.Router();
const jwt  = require('jsonwebtoken')

router.post("/jwt",async(req,res)=>{
    const user = req.body
    //console.log(user);

    //jwt sign
    const token = jwt.sign(user,process.env.ACCESS_TOKEN,{
        expiresIn:'72h'
    })

    //token set into cookie
    res.cookie("token",token,{
        httpOnly:true,
        secure:false
    }).send({status: true})

})


module.exports = router