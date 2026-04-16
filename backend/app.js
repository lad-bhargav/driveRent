const User = require("./models/User.js");
const Cars = require("./models/Cardetails.js");
const Booking = require("./models/Booking.js");
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

app.get("/",(req,res)=>{
    res.send("working")
})

// Sign-up route
app.post("/sign-up",async(req,res)=>{
    try{
        const {email,password,username,profilepic} = req.body;
        if(username != '' && password != '' && email != ''){
            const newUser = new User({
                email,
                password,
                username,
                profilepic
            });
            await newUser.save();
            console.log(newUser);
            res.status(201).json({message: "user created"});
        } else {
            res.status(400).json({message: "Please fill in all fields"});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
})

// Login route
app.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        if(user.password !== password){
            return res.status(400).json({message: "Invalid credentials"});
        }
        res.status(200).json({message: "Logined"});
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
})

// Get all cars
app.get("/cars",async(req,res)=>{
    try{
        const allcars = await Cars.find({});
        res.json(allcars);
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
})

// Get car by id
app.get("/cars/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const car = await Cars.findById(id);
        if(!car){
            return res.status(404).json({message: "Car not found"});
        }
        res.json(car);
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
})

// Get user profile by email
app.post("/profile",async(req,res)=>{
    try{
        const {email} = req.body;
        const profile = await User.findOne({
            "email" : email,
        });
        res.json({
            "profile" : profile,
        })
    }catch(err){
        res.status(500).json({error : err.message});
    }
});

// Update user profile by id
app.post("/profile/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const {username,password,profilepic} = req.body;
        const updatedProfile = await User.findByIdAndUpdate(id,{
            username,
            password,
            profilepic
        },{new : true});
        res.json({
            "updatedProfile" : updatedProfile,
        })
    }catch(e){
        console.log(e);
        res.status(500).json({error : e.message});
    }
})

// Create a new booking
app.post("/booking/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const car = await Cars.findById(id);
        if(!car){
            return res.status(404).json({message: "Car not found"});
        }
        const updatedCar = await Cars.findByIdAndUpdate(id,{
            isBooked : true,
        },{new : true});

        const {useremail,carname,carimg,price,model,useraddress,modelyear,userphNum,capacity,mop,avg} = req.body;
        const newBooking = new Booking({
            useremail,
            carname,
            carimg,
            price,
            model,
            useraddress,
            modelyear,
            userphNum,
            capacity,
            mop,
            avg,
        });
        await newBooking.save();
        console.log(newBooking);
        res.status(201).json({message: "booking created"
        })
    }catch(e){
        console.log(e);
        res.status(500).json({error : e.message});
    }
})

// Get bookings by user email
app.post("/mybookings",async(req,res)=>{
    try{
        const {useremail} = req.body;
        const myBookings = await Booking.find({useremail});
        res.json(myBookings);
    }catch(e){
        console.log(e);
        res.status(500).json({error : e.message});
    }
});

app.listen(8080,()=>{
    console.log("server is running at port 8080");
})
