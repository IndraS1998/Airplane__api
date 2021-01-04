let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let adminController = require("../controllers/adminController");
let {createAdmin,authenticate} = adminController;

Router.post("/createAdmin",createAdmin);
Router.post("/authenticate",authenticate);

module.exports = Router;