let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let flightSchema = new Schema({

});

module.exports = mongoose.model('Flights',flightSchema);