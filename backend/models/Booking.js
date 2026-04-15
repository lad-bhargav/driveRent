const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    useremail : {
        type : String,
    },
    carname : {
        type : String,
    },
    carimg : {
        type : String,
    },
    price : {
        type : Number,
    },
    model : {
        type : String,
    },
    useraddress : {
        type : String,
    },
    modelyear : {
        type : String,
    },
    userphNum : {
        type : Number,
    },
    capacity:{
        type: String,
    },
    mop : {
        type : String,
    },
    avg : {
        type: String,
    }
});

const BookedCars = mongoose.model("BookedCars",BookingSchema);
module.exports = BookedCars;