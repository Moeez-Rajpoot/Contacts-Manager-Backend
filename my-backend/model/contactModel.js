const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Please Enter the name "] },
    email: { 
        type: String,
        required: [true, "Please Enter the email"] },
    phone: {
        type: String,
        required: [true, "Please Enter the phone no"]
    },
},
{
   timestamps: true
}

);

module.exports = mongoose.model("contacts" , userSchema  );