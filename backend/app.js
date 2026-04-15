const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://driverent:driverent123@cluster0.l5vpbe1.mongodb.net/?appName=Cluster0";
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
}).catch(e => console.log(e));