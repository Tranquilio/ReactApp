const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const apiRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
apiRoutes.route("/api/questions").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("questions")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
module.exports = apiRoutes;