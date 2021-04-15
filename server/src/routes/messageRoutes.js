let express = require("express");
let {check} = require("express-validator");
let router = express.Router();

let messageController = require("../controllers/messageController");
let {get,create,deleteM} = messageController;

router.get("/",get);
router.post("/",[
    check("reqFN").notEmpty().isString(),
    check("reqLN").notEmpty().isString(),
    check("reqEm").notEmpty().isString(),
    check("subject").notEmpty().isString(),
    check("message").notEmpty().isString()
],create);

router.delete("/",[
    check("mID").notEmpty().isString()
],deleteM);

module.exports = router;