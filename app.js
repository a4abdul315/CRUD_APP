const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyparser = require("body-parser");

const app = express();
const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT;

//Setting Port
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

//MongoDB Connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//view engine
app.set("view engine", "ejs");

//loading assets
app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));

//Loading routers
app.use("/", require("./server/routes/routes"));
