let express = require("express");
let {check} = require("express-validator");
let router = express.Router();

let workerController = require("../controllers/workerController");
let {createUser,login,editPassword} = workerController;

router.post("/create",[
    check('name').notEmpty().isString(),
    check('email').notEmpty().isString(),
    check('sex').notEmpty().isString(),
    check('department').notEmpty().isString(),
    check('password').notEmpty().isString(),
    check('address').notEmpty().isString(),
    check('phone_Number').notEmpty().isNumeric()
],createUser);

router.post("/login",[
    check('name').notEmpty().isString(),
    check('password').notEmpty().isString()
],login);

router.post("/edit",[
    check('name').notEmpty().isString(),
    check('password').notEmpty().isString(),
    check("newPassword").notEmpty().isString()
],editPassword);

module.exports = router;