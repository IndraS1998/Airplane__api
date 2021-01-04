let mongoose = require("mongoose");
let {Schema} = mongoose;

let workerSchema = new Schema({

});

module.exports = mongoose.model("WorkerSchema",workerSchema);