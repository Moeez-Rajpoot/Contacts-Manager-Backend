const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;


app.use("/api/msg", require('./routes/contactRoutes'))

app.listen(PORT, ()=>{
    console.log(`The Server is running on Port ${PORT}`);


});



