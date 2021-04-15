let {validationResult} = require("express-validator");
//let jwt= require("jsonwebtoken");
//let bcrypt = require("bcryptjs");

let HttpError = require('../models/httpError');
let Flight = require('../models/flights');

//  %%  creation of a new flight space    %%
let create = async (req,res,next) =>{
    //validate user input
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('invalid user input',401));
    }
    //create new flight
    let {departure,arrival,price,category,air_flight,airport,destination,air_flight_number,c_name,c_id} = req.body;

    let date = new Date();
    let newFlight = new Flight({
        departure,
        arrival,
        destination,
        price,
        category,
        booked : false,
        air_flight,
        air_flight_number,  //the seat number
        airport,
        c_name,
        c_id,
        owner_id:"",
        ctd_date : date.toLocaleString(),
    });
    try{
       await newFlight.save();
    }catch (e) {
        console.log(e);
        return next(new HttpError('system error please try again later',401));
    }
    await res.status(200).json({message : "ok"});
};

//  %%  updating a flight space for booked %%
let updateFlightSpace = async(req,res,next) =>{
    //get the id from the body
    let {flightId} = req.body;
    //find if the flight exists
    let foundFLight;
    try{
        foundFLight = await Flight.findById(flightId).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!foundFLight){
        return next(new HttpError('such a flight does not exist',401));
    }
    //edit the flight
    foundFLight.booked = !foundFLight.booked;
    try{
        await foundFLight.save();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    await res.status(200).json({foundFLight:foundFLight.toObject({getters:true})})
};

//  %%  updating the price%%

let updateFlightPrice = async (req,res,next) =>{
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('invalid user input',401));
    }
    let {flightId,newPrice} = req.body;

    let foundFlight;
    try{
        foundFlight = await Flight.findById(flightId).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!foundFlight){
        return next(new HttpError('such a flight does not exist',401));
    }
    foundFlight.price = newPrice;
    try{
        await foundFlight.save();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    await res.status(200).json({foundFlight:foundFlight.toObject({getters:true})})
};

//  %%  deleting a flight space %%
let deleteFlightSpace = async (req,res,next) =>{
    //get the id from the body
    let {flightId} = req.body;

    let foundFlight;
    try{
        foundFlight = await Flight.findById(flightId).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!foundFlight){
        return next(new HttpError('such a flight does not exist',401));
    }
    //deleting the flight
    try{
        await foundFlight.remove();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    res.status(200).json({message:"ok successfully deleted"})
};

//  %%  getting all the flight spaces   %%
let getAllFlights = async (req,res,next) =>{
    let flights;
    try{
        flights = await Flight.find().exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!flights){
        return next(new HttpError('no flight found',401));
    }
    await res.status(200).json({flights : flights.map(flight =>flight.toObject({getters:true}))});
};
/*
    obsolete methods
    the frontend will fetch all flights and do the selection based on the booked property
//  %%  getting flights all booked flights  %%
let getBookedFlights = async (req,res,next) =>{};

//  %%  get all available flights   %%
let getAvailableFLights = async (req,res,next) =>{};
*/
exports.createFlightSpace = create;
exports.deleteFlightSpace = deleteFlightSpace;
exports.updateFlightSpace = updateFlightSpace;
exports.updateFlightPrice = updateFlightPrice;
exports.getAllFlights = getAllFlights;
