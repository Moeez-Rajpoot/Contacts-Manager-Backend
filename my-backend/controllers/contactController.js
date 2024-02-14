const asynchandler = require("express-async-handler");
const Contacts = require("../model/contactModel");

const getcontact = asynchandler(async (req, res) => {
  try {
    const Allcontacts = await Contacts.find({ user_id: req.user.id });
    res.json({
      message: "All Contacts Displayed",
      Contacts: Allcontacts,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error No contacts Found",
    });
  }
});

const postcontact = asynchandler(async (req, res) => {
  console.log("Post Request ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Error in Post Request");
  }

  try {
    const newContact = await Contacts.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });

    res.status(201).json({
      message: "Contact created successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(404).json({
      message: "Internal Server Error",
    });
  }
});

const putcontact = asynchandler(async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("No Contact Found");
    }

    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error(
        "User dont have permission to update other user contacts"
      );
    }
    const updatecontact = await Contacts.findByIdAndUpdate(
      req.params.id,
      req.body,

      { new: true }
    );
    res.json({
      message: "Contact Sucessfully Updated",
      updatecontact: updatecontact,
    });
  } catch (error) {
    res.json({
      message: "Error While Udating Contact",
    });
  }
  res.json({
    message: `The Contact is deleted of ${req.params.id}`,
  });
});

const deletecontact = asynchandler(async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("No Contact Found");
    }

    const DeleteContact = await Contacts.findByIdAndDelete(req.params.id);

    res.json({
      message: "Contact Deleted Succesfully",
      Contact: DeleteContact,
    });
  } catch (error) {
    res.status(404).json({
      message: "No Contact Found !",
    });
  }

  res.json({
    message: `The Contact is deleted of ${req.params.id}`,
  });
});

const getcontactid = asynchandler(async (req, res) => {
  const ID = req.params.id;
  try {
    const ContactID = await Contacts.findById(req.params.id);
    res.json({
      message: "Contact Found !",
      Contact: ContactID,
    });
  } catch (error) {
    res.json({
      message: `No Contact Found of ${req.params}`,
    });
  }
});

module.exports = {
  getcontact,
  postcontact,
  putcontact,
  deletecontact,
  getcontactid,
};
