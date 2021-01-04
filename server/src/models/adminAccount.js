let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let adminSchema = new Schema({

});

module.exports = mongoose.model("Administrator",adminSchema);