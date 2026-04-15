const mongoose = require("mongoose");
const Indata = require('./data.js');
const cardetails = require("../models/Cardetails.js");
const MONGO_URL = 'mongodb+srv://driverent:driverent123@cluster0.l5vpbe1.mongodb.net/?appName=Cluster0';

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
}).catch(e => console.log(e));

const initDB = async() => {
    await cardetails.deleteMany({});
    await cardetails.insertMany(Indata.data);
    console.log("data is inited");
}

initDB();