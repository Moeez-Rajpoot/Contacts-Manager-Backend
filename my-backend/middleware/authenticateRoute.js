const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validate = asynchandler(async (req,res,next)=>{

    let token;
    const headertoken = req.header.Authorization || req.header.authorization ;
    








})