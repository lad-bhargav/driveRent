const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cardetails = new Schema({
    name : {
        type : String,
    },
    price : {
        type : Number,
    },
    model : {
        type : String,
    },
    img : {
        type : String,
    },
    description : {
        type : String,
    },
    modelyear : {
        type : String,
    },
    capacity : {
        type: String,
    },
    avg : {
        type: String,
    }
});

const CarDetails = mongoose.model("CarDetails",Cardetails);
module.exports = CarDetails;