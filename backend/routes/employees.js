const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const employeeRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");

//Helper functions
function getAvg(object) {
    //Ignore first two elements of employeeInfo and calc average of scores per individual
    avg = 0
    for(i=2; i<object.employeeInfo.length; i++) {
        avg = avg + object.employeeInfo[i]
    }
    avg = avg / (object.employeeInfo.length - 1)
    return avg
}

function getAvgScore(array) {
    //Ignore first two elements
    avg = 0
    for(element of array) {
        avg = avg + getAvg(element)
    }
    //Overall Wellbeing Score
    avg = (avg*100) / (array.length*6)
    return {"Average Score": avg}
}
 
// This section will help you get a list of all the employee data.
employeeRoutes.route("/api/employees/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        for (element of result) {
            element["averageScore"] = getAvg(element)
        }
        res.json(result);
    });
});

employeeRoutes.route("/api/employees/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        for (element of result) {
            element["averageScore"] = getAvg(element)
        }
        res.json(result);
    });
});

//Gets blocked by /employees/{id}
// employeeRoutes.route("/api/employees/scores").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     cursor = db_connect.collection("typeform-response").find({});
//     cursor.toArray(function (err, result) {
//         if (err) throw err;
//         res.json(getAvgScore(result));
//     });
// });

// Used for overall wellbeing score
employeeRoutes.route("/api/employees/scores/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(getAvgScore(result));     
    });
});

employeeRoutes.route("/api/employees/scores/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(getAvgScore(result));
    });
});

//Json -> {deptname : score}
employeeRoutes.route("/api/employees/dept/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            dept = element["employeeInfo"][0] //Is role but currently no dept 
            out[dept] = {score: 0 , count: 0}
        }
        for (element of result) {
            dept = element["employeeInfo"][0] 
            element["averageScore"] = getAvg(element)
            out[dept]["score"] = out[dept]["score"] + element["averageScore"]
            out[dept]["count"] = out[dept]["count"] + 1
        }
        for (dept in out) {
            out[dept] = out[dept]["score"] / out[dept]["count"]
        }
        res.json(out);
    });
});

employeeRoutes.route("/api/employees/dept/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            dept = element["employeeInfo"][0] //Is role but currently no dept 
            out[dept] = {score: 0 , count: 0}
        }
        for (element of result) {
            dept = element["employeeInfo"][0] 
            element["averageScore"] = getAvg(element)
            out[dept]["score"] = out[dept]["score"] + element["averageScore"]
            out[dept]["count"] = out[dept]["count"] + 1
        }
        for (dept in out) {
            out[dept] = out[dept]["score"] / out[dept]["count"]
        }
        res.json(out);
    });
});

//Json -> {seniority : score}
employeeRoutes.route("/api/employees/seniority/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            seniority = element["employeeInfo"][1] //Is years but currently no seniority 
            out[seniority] = {score: 0 , count: 0}
        }
        for (element of result) {
            seniority = element["employeeInfo"][1] 
            element["averageScore"] = getAvg(element)
            out[seniority]["score"] = out[seniority]["score"] + element["averageScore"]
            out[seniority]["count"] = out[seniority]["count"] + 1
        }
        for (seniority in out) {
            out[seniority] = out[seniority]["score"] / out[seniority]["count"]
        }
        res.json(out);
    });
});

employeeRoutes.route("/api/employees/seniority/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            seniority = element["employeeInfo"][1] //Is years but currently no seniority 
            out[seniority] = {score: 0 , count: 0}
        }
        for (element of result) {
            seniority = element["employeeInfo"][1] 
            element["averageScore"] = getAvg(element)
            out[seniority]["score"] = out[seniority]["score"] + element["averageScore"]
            out[seniority]["count"] = out[seniority]["count"] + 1
        }
        for (seniority in out) {
            out[seniority] = out[seniority]["score"] / out[seniority]["count"]
        }
        res.json(out);
    });
});

// If need a complete json with scores -> Moved to default gets
// employeeRoutes.route("/api/employees/all/scores").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     cursor = db_connect.collection("typeform-response").find({});
//     cursor.toArray(function (err, result) {
//         if (err) throw err;
//         for (element of result) {
//             element["averageScore"] = getAvg(element)
//         }
//         res.json(result);
//     });
// });

// employeeRoutes.route("/api/employees/:id/scores").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
//     cursor.toArray(function (err, result) {
//         if (err) throw err;
//         for (element of result) {
//             element["averageScore"] = getAvg(element)
//         }
//         res.json(result);
//     });
// });

module.exports = employeeRoutes;