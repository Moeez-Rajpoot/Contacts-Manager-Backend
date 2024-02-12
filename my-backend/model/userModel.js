const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Enter the name "] ,
        unique: [true]
    },
    
    email: { 
        
        type: String,
        required: [true, "Please Enter the email"],
        unique: [true]
    
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