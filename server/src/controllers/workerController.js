let {validationResult} = require("express-validator");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

//  %%  creation of a new user  %%
let createUser = async (req,res,next) =>{

};

//  %%  signing a user up   %%
let logIn = async (req,res,next) =>{

};

exports.createUser = createUser;
exports.login = logIn;