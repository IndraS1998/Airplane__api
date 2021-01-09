let {validationResult} = require('express-validator');

let Operation = require('../models/operation');
let HttpError = require('../models/httpError');

//getting transactions
let getTransactions = async (req,res,next) =>{
    let operations;
    try{
        operations = await Operation.find().exec();
    }catch (e) {
        return next(new HttpError("something went wrong please try again latter",401));
    }

    await res.status(200).json({transactions : operations.map(operation => operation.toObject({getters:true}))})
};

//creating a transaction
let createTransaction = async (req,res,next) =>{
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('please input fiealds are not all valid',401));
    }
    let {flightId,buyerName,buyerEmail,buyerPurchaseNumber} = req.body;
    let newTransaction = new Operation({
        flightId,
        buyerName,
        buyerEmail,
        buyerPurchaseNumber
    }) ;

    try{
        await newTransaction.save();
    }catch (e) {
        return next(new HttpError('somthing went wrong trya again latter',401));
    }
    await res.status(201).json({operation:newTransaction.toObject({getters:true})});
};

//deleting transactions
let deleteTransaction = async (req,res,next) =>{
    if(!validationResult(req).isEmpty()){
        return next(new HttpError('all valid fields are not populated',401));
    }
    let {transactionId} = req.body;
    try{
        await Operation.findByIdAndDelete(transactionId);
        await res.status(200).json({message:"success"});
    }catch (e) {
        return next(new HttpError("system error please try again latter",401));
    }
};

exports.getTransaction = getTransactions;
exports.createTransaction = createTransaction;
exports.deleteTransaction = deleteTransaction;