const asynchandler = require('express-async-handler');
const Contacts =  require('../model/contactModel');
const getcontact = asynchandler( async (req, res) => {
    res.json({
        message: 'Hello there this is get'
    });
});

const postcontact =asynchandler(async (req, res) => {
    console.log("This is Body msg ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Error in Post Request");

    }

    try {
        // Create a new instance of the Contact model with the provided data
        const newContact = await Contacts.create({
            name,
            email,
            phone
        });

        // Respond with a success message
        res.status(201).json({
            message: 'Contact created successfully',
            contact: newContact
        });
    } catch (error) {
        // Handle any errors that occur during the creation process
        console.error('Error creating contact:', error);
        res.status(404).json({
            message: 'Internal Server Error'
        });
    }

});


const putcontact = asynchandler(async (req, res) => {
    res.json({
        message: `Hello there  ${req.params.id}`
    });
});


const deletecontact =asynchandler( async (req, res) => {
    res.json({
        message: `The Contact is deleted of ${req.params.id}`
    });
});

const getcontactid =asynchandler(async (req, res) => {
    res.json({
        message: `Getting Contact of id ${req.params.id}`
    });
});


module.exports = { getcontact, postcontact, putcontact, deletecontact, getcontactid };