const express = require("express");
const User = require("../controllers/userController");
const Authorize = require("../middleware/authenticateRoute");
const router = express.Router();

router.route("/register").post(User.Register);

router.route("/login").post(User.Login);

router.route("/current").get(Authorize, User.Current);

module.exports = router;
