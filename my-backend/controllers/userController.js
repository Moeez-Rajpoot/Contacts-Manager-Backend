const asynchandler = require("express-async-handler");
const User = require("../model/userModel");
const Bcrypt = require("bcrypt");

//Register User function
//api : /api/user/register
//access public

const Register = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fields are Required");
  }
  const CheckUsername = await User.findOne({ username });
  if (CheckUsername) {
    res.status(400);
    throw new Error("Username Already Registered");
  }
  const CheckUseremail = await User.findOne({ email });
  if (CheckUseremail) {
    res.status(400);
    throw new Error("Email Already Registered");
  }
  const hashpassword = await Bcrypt.hash(password, 10);
  const NewUser = await User.create({
    username,
    email,
    password: hashpassword,
  });

  console.log(`User Created ${NewUser}`);
  if (NewUser) {
    res.status(201).json({
      _id: NewUser.id,
      _username: NewUser.username,
      _email: NewUser.email,
    });
  } else {
    res.status(400);
    throw new Error("New User Data is not valid");
  }
});

const Login = asynchandler(async (req, res) => {
  res.json({
    message: "Login Successfully",
  });
});

const Current = asynchandler(async (req, res) => {
  console.log("Current User is  mOEEZ");
  process.abort;
});

module.exports = { Register, Login, Current };
