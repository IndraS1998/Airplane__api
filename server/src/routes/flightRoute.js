let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let flightController = require("../controllers/flightController");
let {createFlightSpace,deleteFlightSpace,updateFlightSpace,getAllFlights,getBookedFlights} = flightController;

Router.post("/new-flight",createFlightSpace);
Router.delete("/del-flight",deleteFlightSpace);
Router.patch("/update-flight",updateFlightSpace);
Router.get("/",getAllFlights);
Router.get("/booked",getBookedFlights);

module.exports = Router;