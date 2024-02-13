const asynchandler = require("express-async-handler");
const User = require("../model/userModel");

//Register User function
//api : /api/user/register
//access public



const Register = asynchandler(async (req, res) => {
    res.json({
        message:"User Registered"
    })


 



    
});

const Login = asynchandler(async (req, res) => {

    
 



    
});

const Current = asynchandler(async (req, res) => {

    
 



    
});

module.exports = {Register ,Login , Current }