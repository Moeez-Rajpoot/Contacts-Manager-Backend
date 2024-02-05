const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;


app.get("/api/msg", (req,res)=>{

    res.json({
        message: 'Hello there'
    });
})

app.listen(PORT, ()=>{
    console.log(`The Server is running on Port ${PORT}`);


});



