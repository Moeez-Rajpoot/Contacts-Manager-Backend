const express = require("express");
const User = require('../controllers/userController');
const router = express.Router();

router.route("/register").post(User.Register);

router.route("/login").post(User.Login);

router.route("/current").get(User.Current);

module.exports = router;
