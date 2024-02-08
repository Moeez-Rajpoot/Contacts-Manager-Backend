const asynchandler = require('express-async-handler');

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
    res.json({

        message: 'Hello there create new contact'
    });
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