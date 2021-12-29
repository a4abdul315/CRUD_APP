const mongoose = require("mongoose");

const dbURL = "mongodb+srv://admin:admin@crud.crc1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

  console.log("MongoDB connected");
};

module.exports = connectDB;
