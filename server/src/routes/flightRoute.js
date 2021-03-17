let express = require("express");
let {check} = require("express-validator");
let router = express.Router();

let flightController = require("../controllers/flightController");
let {createFlightSpace,deleteFlightSpace,updateFlightSpace,updateFlightPrice,getAllFlights} = flightController;

router.post("/create",[
    check('departure').isString().notEmpty(),
    check('arrival').isString().notEmpty(),
    check('price').isNumeric().notEmpty(),
    check('category').notEmpty().isString(),
    check('air_flight').notEmpty().isString(),
    check('airport').notEmpty().isString(),
    check('destination').isString().notEmpty(),
    check('air_flight_number').notEmpty().isString(),
    check('c_name').notEmpty().isString(),
    check('c_id').notEmpty().isString(),
],createFlightSpace);

router.delete("/delete",deleteFlightSpace);

router.patch("/update",updateFlightSpace);  //to be exploited by client end

router.patch("/updatePrice",[
    check('newPrice').isNumeric().notEmpty(),
    check('flightId').isString().notEmpty()
],updateFlightPrice);

router.get("/",getAllFlights);

module.exports = router;