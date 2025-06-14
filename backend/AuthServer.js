const express = require("express");
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/auth');
const app = express();
const cors = require("cors");
//Write config variables here
require("dotenv").config({ path: "./config.env" });
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(AuthRoutes)
// get driver connection
const dbo = require("./conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});