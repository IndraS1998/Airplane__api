let {validationResult} = require("express-validator");
let jwt= require("jsonwebtoken");
let bcrypt = require("bcryptjs");

//  %%  creation of a new flight space    %%
let create = async (req,res,next) =>{};

//  %%  updating a flight space %%
let updateFlightSpace = async(req,res,next) =>{};

//  %%  deleting a flight space %%
let deleteFlightSpace = async (req,res,next) =>{};

//  %%  getting all the flight spaces   %%
let getAllFlights = async (req,res,next) =>{};

//  %%  getting flights all booked flights  %%
let getBookedFlights = async (req,res,next) =>{};

//  %%  get all available flights   %%
let getAvailableFLights = async (req,res,next) =>{};

exports.createFlightSpace = create;
exports.deleteFlightSpace = deleteFlightSpace;
exports.updateFlightSpace = updateFlightSpace;
exports.getAllFlights = getAllFlights;
exports.getBookedFlights = getBookedFlights;
