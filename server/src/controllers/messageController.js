let {validationResult} = require("express-validator");

let HttpError = require("../models/httpError");
let Message = require("../models/message");

//creating a message
async function create(req,res,next){
    //validate user input
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('invalid user input',401));
    }

    let {reqFN,reqLN,reqEm,subject,message} = req.body;

    let newMessage = new Message({
        requesterFirstName:reqFN,
        requesterLastName:reqLN,
        requesterEmail:reqEm,
        subject,
        message
    });

    try{
        await newMessage.save();
    }catch (e) {
        return next(new HttpError("network error please try again later",401))
    }
    await res.json({message:"success"}).status(200);
}
//deleting a message
async function deleteM(req,res,next){
    //validate user input
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('invalid user input',401));
    }
    let {mID} = req.body;

    let foundMessage;
    try{
        foundMessage = await Message.findById(mID).exec();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    if(!foundMessage){
        return next(new HttpError('such a flight does not exist',401));
    }
    //deleting the flight
    try{
        await foundMessage.remove();
    }catch (e) {
        return next(new HttpError('system error please try again later',401));
    }
    await res.status(200).json({message:"ok successfully deleted"})
}

//getting messages

async function get(req,res,next){
    let m;
    try{
        m = await Message.find().exec();
    }catch (e) {
        return next(new HttpError("network error please try later",401));
    }

    if(!m){
        return next(new HttpError("no messages yet",402));
    }
    await res.json({messages : m.map(message => message.toObject({getters:true}))}).status(200);
}

exports.create = create;
exports.deleteM = deleteM;
exports.get = get;