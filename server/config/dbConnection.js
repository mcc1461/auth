// dbConnection.js is a file that connects to the MongoDB database using mongoose.

const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = dbConnection;
