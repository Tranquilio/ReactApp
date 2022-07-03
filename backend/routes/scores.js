const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const apiRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");

function calcInfo(output) {
    var answers = output["answers"];
    var categories = [];
    var scores = [];
    var intermediate = {};
    //console.log(answers);
    for(var index in answers) {
        var current = answers[index];
        var cat = current["category"];
        //Instead can simply sum here
        if(intermediate[cat] == undefined) {
            intermediate[cat] = [];
        }
        intermediate[cat].push(current["answer"]);
    }

    for (var key in intermediate) {
        categories.push(key);
        var value = intermediate[key];
        // console.log(value);
        var total = 0;
        for(var index in value) {
            total += parseInt(value[index]);
        }
        // console.log(total);
        intermediate[key] = total / value.length;
        scores.push(total / value.length);
    }
    //console.log(intermediate);
    return intermediate;
}


// Get top 3 stressors scores and store into indices array 
function topScores(scores) {
    // console.log(scores);

    var toSort = [];
    for (var key in scores) {
        toSort.push([key, scores[key]]);
    }

    // console.log(toSort);

    toSort.sort(function(a, b) {
        return (a[1] < b[1]) ? 1 : -1;
    });

    // console.log(toSort);

    var topIndex = [];
    for(let i = 0; i < 3; i++) {
        var category = toSort[i][0];
        topIndex.push(category);
    }
    return topIndex;
}


apiRoutes.route("/api/scores").get(function (req, res) {
 let db_connect = dbo.getDb();
 cursor = db_connect.collection("answers").find({});
 cursor.toArray(function (err, result) {
    if (err) throw err;
    res.json(calcInfo(result[result.length -1]));
 });
});

apiRoutes.route("/api/topscores").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("answers").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(topScores(calcInfo(result[result.length -1])));
    });
});
 
module.exports = apiRoutes;