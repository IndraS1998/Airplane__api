let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let operationSchema = new Schema({
   flightId:{type: String, required: true},
   buyerName:{type: String, required: true},
   buyerEmail:{type: String, required: true},
   buyerPurchaseNumber:{type: Number, required: true}, //might be phone number, account number, PayPal identifier etc
});

module.exports = mongoose.model("OperationSchema",operationSchema);