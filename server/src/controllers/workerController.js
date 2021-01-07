let {validationResult} = require("express-validator");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let Worker = require('../models/workerAccount');
let HttpError = require('../models/httpError');

//  %%  creation of a new user  %%
let createUser = async (req,res,next) =>{
    //verify all inputted data
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong user data entered',401));
    }
    //make sure a user with that email or name does not exist
    let {name,email,sex,phone_Number,department,password,address} = req.body;
    let found;
    try{
        found = await Worker.findOne({name,email}).exec();
    }catch (e) {
        return next(new HttpError('something went wrong please try agaon later',401));
    }
    if(found){
        return next(new HttpError('such a user already exist',401))
    }
    //create worker account
    let hash;
    try{
        hash = await bcrypt.hash(password,12);
    }catch (e) {
        return next(new HttpError('something went wrong please try again later',401));
    }
    let newUser = new Worker({
        name,
        password : hash,
        email,
        sex,
        address,
        phone_Number,
        department
    });
    try{
        await newUser.save();
    }catch (e) {
        return next(new HttpError('system error please try later',401));
    }
    await res.status(200).json({message:'success'})
};

//  %%  signing a user up   %%
let logIn = async (req,res,next) =>{
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    //find if user already exists
    let {name,password} = req.body;
    let found;
    try{
        found = Worker.findOne({name});
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!found){
        return next(new HttpError('login failed',401));
    }
    //validate password
    let isValidPassWord = false;
    try{
        isValidPassWord = await bcrypt.compare(password,found.password);
    }catch (e) {
        return next(new HttpError('system error please try agaon later',401));
    }
    if(!isValidPassWord){
        return next(new HttpError('login failed',401));
    }
    let token;
    try{
        token = await jwt.sign({id:found.id,name},
            'descretetionisadvices',
            {expiresIn: '1h'});
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    //sign user in
    await res.status(200).json({name,token});
};

exports.createUser = createUser;
exports.login = logIn;