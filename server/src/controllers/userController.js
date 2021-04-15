let {validationResult} = require("express-validator");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let User = require("../models/Users");
let Flight = require("../models/flights");
let HttpError = require("../models/httpError");

/*      USER SIGN UP        */
async function SignUp(req,res,next){
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    let {firstName,lastName,email,password} = req.body;
    //verification if user already exists
    let found;
    try{
        found = await User.findOne({email}).exec();
    }catch (e) {
        return next(new HttpError("connection error please try again later",401));
    }
    if(found){
        return next(new HttpError("such a user already exists",401));
    }
    //creation of a new user
    let hashed;
    try{
        hashed = await bcrypt.hash(password,12);
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }

    let newUser = new User({
        firstName,
        lastName,
        email,
        password: hashed,
        bankNumber: "",
        likedFlights:[]
    });

    try{
        await newUser.save();
    }catch (e) {
        console.log(e);
        return next(new HttpError("network error please try later",401));
    }
    await res.json({message:"success",user:newUser.toObject({getters:true})}).status(200);
}

/*      USER LOGIN          */
async function Login(req,res,next){
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    //find if user already exists
    let {email,password} = req.body;
    let found;
    try{
        found = await User.findOne({email}).exec();
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
    //sign user in
    await res.status(200).json({user:found});
}

/*      USER EDITING PASSWORD       */
async function EditPassword(req,res,next){
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    let {newPassword,confPassword,email} = req.body;
    //compare original passwords
    let found;
    try{
        found = await User.findOne({email}).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!found){
        return next(new HttpError('login failed',401));
    }
    //validate password
    let isValidPassWord = false;
    try{
        isValidPassWord = await bcrypt.compare(confPassword,found.password);
    }catch (e) {
        return next(new HttpError('system error please try agaon later',401));
    }
    if(!isValidPassWord){
        return next(new HttpError('password error',401));
    }
    //validate new password
    let hash;
    try{
        hash = await bcrypt.hash(newPassword,12);
    }catch (e) {
        return next(new HttpError('something went wrong please try again later',401));
    }
    try{
        found.password = hash;
        await found.save();
    }catch (e) {
        return next(new HttpError('network error please try again later',401));
    }
    await res.status(200).json({message : "ok"});
}

/*  LIKING A FLIGHT*/
async function likeFLight(req,res,next){
    //validate inputs
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('wrong data entered',401));
    }
    const {likedFlightId,userId} = req.body;
    //verify if the flight exists
    let foundFight;
    let foundUser;
    try{
        foundFight = await Flight.findById(likedFlightId);
    }catch (e) {
        return next(new HttpError("some error occurred please try again",401));
    }
    if(!foundFight){
        return next(new HttpError("some error occurred please try again",401));
    }
    try{
        foundUser = await User.findById(userId);
    }catch (e) {
        return next(new HttpError("some error occurred please try again",401));
    }
    if(!foundUser){
        return next(new HttpError("user does not exist",401));
    }
    try{
        foundUser.likedFlights.append(likedFlightId);
        await foundFight.save();
    }catch (e) {
        return next(new HttpError("some error occurred please try again",401));
    }
    res.json({message:"ok"}).status(200);
}

exports.SignUp = SignUp;
exports.Login = Login;
exports.EditPassword = EditPassword;
exports.likeFlights = likeFLight;