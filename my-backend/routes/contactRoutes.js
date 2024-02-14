const express = require('express');
const router = express.Router();
const GetContact = require('../controllers/contactController');
const  validate  = require('../middleware/authenticateRoute');

// router.use(validate);

router.route("/").get(GetContact.getcontact);

router.route("/").post(GetContact.postcontact);


router.route("/:id").put(GetContact.putcontact);


router.route("/:id").delete(GetContact.deletecontact);


router.route("/:id").get(GetContact.getcontactid);

module.exports = router;
