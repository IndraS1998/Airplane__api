let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let flightSchema = new Schema({
    departure:{type: String,required:true},
    arrival:{type:String,required: true},
    destination:{type:String,required:true},
    price :{type:Number,required:true},
    category:{type:String,required:true},
    booked:{type:Boolean,required:true},
    air_flight:{type:String,required:true},
    air_flight_number:{type:String,required:true},
    airport:{type:String,required:true},
    c_name:{type:String,required:true}, // creator
    c_id:{type:String,required:true},
    ctd_date:{type:String,required:true}  //created date
});

module.exports = mongoose.model('Flights',flightSchema);