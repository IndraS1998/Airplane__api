let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let flightController = require("../controllers/flightController");
let {createFlightSpace,deleteFlightSpace,updateFlightSpace,getAllFlights,getBookedFlights} = flightController;

Router.post("/new-flight",[
    check('departure').isDate().notEmpty(),
    check('arrival').isDate().notEmpty(),
    check('price').isNumeric().notEmpty(),
    check('category').notEmpty().isString(),
    check('booked').notEmpty().isBoolean(),
    check('air-flight').notEmpty().isString(),
    check('airport').notEmpty().isString(),
    check('air-flight_number').notEmpty().isNumeric(),
    check('c_name').notEmpty().isString(),
    check('c_id').notEmpty().isString(),
    check('ctd_date').notEmpty().isDate()
],createFlightSpace);

Router.delete("/del-flight",deleteFlightSpace);

Router.patch("/update-flight",updateFlightSpace);

Router.get("/",getAllFlights);
Router.get("/booked",getBookedFlights);

module.exports = Router;