let express = require("express");
let {check} = require("express-validator");
let Router = express.Router();

let workerController = require("../controllers/workerController");
let {createUser,login} = workerController;

Router.post("/createUser",createUser);
Router.post("/login",login);

module.exports = Router;