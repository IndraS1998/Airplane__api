let express = require("express");
let {check} = require("express-validator");
let router = express.Router();

let flightController = require("../controllers/flightController");
let {createFlightSpace,deleteFlightSpace,updateFlightSpace,getAllFlights} = flightController;

router.post("/new-flight",[
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

router.delete("/del-flight",deleteFlightSpace);

router.patch("/update-flight",updateFlightSpace);

router.get("/",getAllFlights);

module.exports = router;