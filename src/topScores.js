import {Double, MongoClient} from 'mongodb';

export var categories = [];
export var scores = [];
var topScore = [];
var stuff = {};

async function handler(req, res)  {

     //Calculate information for one person
     function calcInfo(output) {
        var answers = output["answers"];
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

      scores.sort()


      for(let i = 0; i < 3; i++) {
            topScore[i] = scores[5-i]
        }
        
     console.log(topScore);
    }

    if(req.method == "POST") {
        const data = req.body;

        // New account db
        const client = await MongoClient.connect('mongodb+srv://aayush:aayush@tranquilio.xq7yx.mongodb.net/tranquilio?retryWrites=true&w=majority');
        //const client = await MongoClient.connect('mongodb+srv://user1:YBqHeN3NPYFq3rgJ@cluster0.hrcwq.mongodb.net/tranquilio?retryWrites=true&w=majority');
        const db = client.db();
        console.log(typeof(db));

        const collection = await db.collection('answers');
        const result = await collection.insertOne(JSON.parse(data));

        // console.log(result);
        client.close();

        res.status(200).json({response: "Info inserted"});
    }

    if(req.method == "GET") {
        var output = {};
        // New account db
        const client = await MongoClient.connect('mongodb+srv://aayush:aayush@tranquilio.xq7yx.mongodb.net/tranquilio?retryWrites=true&w=majority');
        //const client = await MongoClient.connect('mongodb+srv://user1:YBqHeN3NPYFq3rgJ@cluster0.hrcwq.mongodb.net/tranquilio?retryWrites=true&w=majority');
        const db = client.db();

        const collection = await db.collection('answers');
        const result = collection.find({username: "Not logged in"}).sort({}); //No specific query type (should probably have multiple endpoints later for different queries)     
        
        await result.forEach(item => {
            output = item;
            // console.log(item);
        });
        
        calcInfo(output);
        topScores(scores);

        client.close();

        res.status(200).send(topScore)
    }
}

 

export default handler;