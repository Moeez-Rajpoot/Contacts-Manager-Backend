const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connection Established with the Mongo DB");
    console.log(connect.connection.host);
    console.log(connect.connection.name);
  } catch (error) {
    console.log("Error in Dbconnection.js" + error);
  }
};

module.exports = connectDB;
