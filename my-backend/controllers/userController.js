const asynchandler = require("express-async-handler");
const User = require("../model/userModel");


//Register User function
//api : /api/user/register
//access public



const Register = asynchandler(async (req, res) => {
    
    const {username , email , password} = req.body;
    if ( !username || !email || !password) {
        res.status(400);
        throw new Error("All Fields are Required");
    }
    const CheckUser = await User.findOne({username});
    if (CheckUser) {
        res.json({
            message:"Username Already Registered"
        });
        
    }
    

        
      


 



    
});

const Login = asynchandler(async (req, res) => {
    res.json({
        message:"Login Successfully"
    })

    
 



    
});

const Current = asynchandler(async (req, res) => {

    console.log("Current User is  mOEEZ");
    process.abort;

    
 



    
});

module.exports = {Register ,Login , Current }