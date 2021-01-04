let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let flightRoute = require("./src/routes/flightRoute");
let adminRoute = require("./src/routes/adminRoute");
let workerRoute = require("./src/routes/workerRoute");

let app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

/*
*               ROUTING LOGIC
* */
app.use("/flights",flightRoute);
app.use("/admin",adminRoute);
app.use("/worker",workerRoute);

/*
*               ERROR HANDLING
* */
app.use((error,req,res,next)=>{
    if(res.headersSent){
        return next(error);
    }
    res.status(500);
    res.json({message : error.message || "an unknown error occurred"})
});

/*
*               CONNECTION LOGIC
* */
mongoose.connect('mongodb+srv://Randy:beauty@cluster0.q6xbz.mongodb.net/flightapi?retryWrites=true&w=majority')
    .then(()=>{
        app.listen(5000,()=>{console.log('app running on port 5000')});
    })
    .catch(err => console.log(err));