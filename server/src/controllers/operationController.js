let {validationResult} = require('express-validator');

let FLight = require('../models/operation');
let HttpError = require('../models/httpError');

//getting transactions
let getTransactions = async (req,res,next) =>{};

//creating a transaction
let createTransaction = async (req,res,next) =>{};

//deleting transactions
let deleteTransaction = async (req,res,next) =>{};

exports.getTransaction = getTransactions;
exports.createTransaction = createTransaction;
exports.deleteTransaction = deleteTransaction;