let {validationResult} = require("express-validator");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let Admin = require("../models/adminAccount");
let HttpError = require("../models/httpError");

//  %%  authentication logic   %%
let authenticate = async (req,res,next) =>{

};

//  %% creation of a new user   %%
let createAdmin = async (req,res,next) =>{

};

exports.authenticate = authenticate;
exports.createAdmin = createAdmin;
