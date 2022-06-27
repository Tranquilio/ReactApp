import {MongoClient} from 'mongodb';

async function handler(req, res)  {

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
        
        client.close();

        res.status(200).send(output)
    }
}

export default handler;