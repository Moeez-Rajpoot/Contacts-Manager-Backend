const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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