import { MongoClient } from "mongodb";

async function insertRecord(){
    const uri="mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    const db=client.db("mydb");
    const message=db.collection("message");
    let jsonDocument={message:"Hello World",sentBy:"jyoti",to:"jj"};
    await message.insertOne(jsonDocument);
    await client.close();
    console.log("Record Added");
}
async function main(){
   await insertRecord();
}
main();