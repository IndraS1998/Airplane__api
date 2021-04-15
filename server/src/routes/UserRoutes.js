let express = require("express");
let {check} = require("express-validator");
let router = express.Router();

let userController = require("../controllers/userController");
let {SignUp,Login,EditPassword,likeFlights} = userController;

router.post("/signUp",[
    check("firstName").notEmpty().isString(),
    check("lastName").notEmpty().isString(),
    check("email").notEmpty().isString(),
    check("password").notEmpty().isString(),
],SignUp);

router.post("/login",[
    check("email").notEmpty().isString(),
    check("password").notEmpty().isString(),
],Login);

router.patch("/edit",[
    check("email").notEmpty().isString(),
    check("confPassword").notEmpty().isString(),
    check("newPassword").notEmpty().isString(),
],EditPassword);

router.post("/like",likeFlights);

module.exports = router;