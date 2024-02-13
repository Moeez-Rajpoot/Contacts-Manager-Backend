const asynchandler = require("express-async-handler");
const User = require("../model/userModel");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields are Required");
  }

  const olduser = await User.findOne({ email });
  if (olduser && (await Bcrypt.compare(password, olduser.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: olduser.username,
          email: olduser.email,
          id: olduser.id,
        },
      },
      process.env.ACCESSTOKEN,
      { expiresIn: "1m" }
    );
    res.status(201).json({
        AccessToken : accessToken
    })
  } else {
    res.status(401);
    throw new Error("Invalid email or Password ");
  }
});

const Current = asynchandler(async (req, res) => {
  console.log("Current User is  mOEEZ");
  process.abort;
});

module.exports = { Register, Login, Current };
