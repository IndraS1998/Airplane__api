let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let flightSchema = new Schema({
    departure:{type: Date,required:true},
    arrival:{type:Date,required: true},
    price :{type:Number,required:true},
    category:{type:String,required:true},
    booked:{type:Boolean,required:true},
    air_flight:{type:String,required:true},
    air_flight_num:{type:Number,required:true},
    airport:{type:String,required:true},
    c_name:{type:String,required:true}, // creator
    c_id:{type:String,required:true},
    ctd_date:{type:Date,required:true}  //created date
});

module.exports = mongoose.model('Flights',flightSchema);