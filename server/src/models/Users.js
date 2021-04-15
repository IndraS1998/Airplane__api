let mongoose =require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    bankNumber:{type:String},
    likedFlights:[{type:String,required:true}]
});

module.exports = mongoose.model('User',UserSchema);