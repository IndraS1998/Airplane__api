let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let workerController = require("../controllers/workerController");
let {createUser,login} = workerController;

Router.post("/createUser",[
    check('name').notEmpty().isString(),
    check('email').notEmpty().isString(),
    check('sex').notEmpty().isString(),
    check('department').notEmpty().isString(),
    check('password').notEmpty().isString(),
    check('address').notEmpty().isString(),
    check('phone_Number').notEmpty().isNumeric()
],createUser);

Router.post("/login",[
    check('name').notEmpty().isString(),
    check('password').notEmpty().isString()
],login);

module.exports = Router;