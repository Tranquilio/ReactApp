const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const employeeRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");
 
// This section will help you get a list of all the questions.
employeeRoutes.route("/api/employees/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

employeeRoutes.route("/api/employees/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
       if (err) throw err;
       res.json(result);
    });
});
 
module.exports = employeeRoutes;