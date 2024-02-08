const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');
const ErrorHandlder = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());

app.use("/api/msg", require("./routes/contactRoutes"));
app.use(ErrorHandlder);

app.listen(PORT, ()=>{
    console.log(`The Server is running on Port ${PORT}`);


});



