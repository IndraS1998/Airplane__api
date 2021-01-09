let express = require('express');
let {check} = require('express-validator');
let router = express.Router();

let transactionController = require('../controllers/operationController');
let {getTransaction,createTransaction,deleteTransaction} = transactionController;

router.post("create",[
    check('flightId').isString().notEmpty(),
    check('buyerName').isString().notEmpty(),
    check('buyerEmail').isString().notEmpty(),
    check('buyerPurchaseNumber').isNumeric().notEmpty()
],createTransaction);

router.get("/",getTransaction);

router.delete("/",[
    check('transactionId').notEmpty().isString()
],deleteTransaction);

module.exports = router;