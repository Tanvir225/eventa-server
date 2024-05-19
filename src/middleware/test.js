const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')

router.use(async(req,res,next)=>{
    console.log('hi');
    next()
})

module.exports = router