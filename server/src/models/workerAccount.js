let mongoose = require("mongoose");
let {Schema} = mongoose;

let workerSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required: true},
    sex:{type:String,required:true},
    department:{type:String,required:true},
    password:{type:String,required:true},
    phone_Number : {type:Number,required:true},
    address : {type : String,required:true}
});

module.exports = mongoose.model("WorkerSchema",workerSchema);