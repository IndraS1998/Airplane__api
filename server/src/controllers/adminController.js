let {validationResult} = require("express-validator");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let Admin = require("../models/adminAccount");
let HttpError = require("../models/httpError");

//  %%  authentication logic   %%
let authenticate = async (req,res,next) =>{
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    //find if user already exists
    let {name,password} = req.body;
    let found;
    try{
        found = Admin.findOne({name});
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

//  %% creation of a new user   %%
let createAdmin = async (req,res,next) =>{
    //validate all inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data submitted',401));
    }
    //check if a user already exists with that name
    let {name,email,password,sex,address,phone_Number} = req.body;
    let foundAdmin;
    try{
        foundAdmin = await Admin.findOne({name,email}).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(foundAdmin){
        return next(new HttpError('user already exits',401));
    }
    //create new user
    let hashed;
    try{
        hashed = await bcrypt.hash(password,12);
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }

    let newAdmin = new Admin({
        name,
        email,
        sex,
        password : hashed,
        phone_Number,
        address
    });
    try{
        await newAdmin.save();
    }catch (e) {
        return next(new HttpError('system error something went wrong',401));
    }
    console.log('done');
    await res.json({message : 'success'}).status(200);

};

exports.authenticate = authenticate;
exports.createAdmin = createAdmin;
