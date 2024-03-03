const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const conn = require("./server/database/connection");
const models = require('./server/model/models');

const app= express();
app.use(bodyparser.json());


dotenv.config({path:"config.env"});
const PORT=process.env.PORT || 8080
//log request
app.use(morgan('tiny'));

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"));

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load routers
app.use("/",require("./server/routes/router"));



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
});