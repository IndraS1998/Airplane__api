let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let messageSchema = new Schema({
    requesterFirstName : {type:String,required:true},
    requesterLastName : {type : String, required : true},
    requesterEmail : {type: String, required : true},
    subject : {type : String, required : true},
    message : {type : String, required : true}
});

module.exports = mongoose.model("Message",messageSchema);