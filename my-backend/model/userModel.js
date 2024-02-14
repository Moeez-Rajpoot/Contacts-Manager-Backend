const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username: {
        type: String,
        required: [true, "Please Enter the name "] ,
        unique: [true , "Username not avaiable"]
    },
    
    email: { 
        
        type: String,
        required: [true, "Please Enter the email"],
        unique: [true," Email already Registered"]
    
    },
    password: {
        type: String,
        required: [true, "Please Enter the phone no"]
    },
},
{
   timestamps: true
}

);

module.exports = mongoose.model("user" , userSchema  );