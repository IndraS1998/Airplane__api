let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let adminSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required: true},
    sex:{type:String,required:true},
    password:{type:String,required:true},
    phone_Number : {type:Number,required:true},
    address : {type : String,required:true}
});

module.exports = mongoose.model("Administrator",adminSchema);