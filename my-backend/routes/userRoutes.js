const express = require("express");
const router = express.Router();

router.route("/register").post();

router.route("/login").post();

router.route("/current").get();

module.exports = router;
