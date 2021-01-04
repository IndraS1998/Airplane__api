let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let adminController = require("../controllers/adminController");
let {createAdmin,authenticate} = adminController;

Router.post("/createAdmin",[
    check('name').notEmpty().isString(),
    check('email').notEmpty().isString(),
    check('sex').notEmpty().isString(),
    check('password').notEmpty().isString(),
    check('address').notEmpty().isString(),
    check('phone_Number').notEmpty().isNumeric()
],createAdmin);

Router.post("/authenticate",[
    check('name').notEmpty().isString(),
    check('password').notEmpty().isString()
],authenticate);

module.exports = Router;