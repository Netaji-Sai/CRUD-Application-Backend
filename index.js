const express = require("express");
const studentRoute = require("./controller/studentRoute")
// Mongoose Connection
const bodyParser = require("body-parser");
const cors = require("cors");
const mong = require("mongoose");

mong.set("strictQuery",true); //To supress the Deprecation Warning 
mong.connect("mongodb+srv://test1:12345@cluster0.ef4t0bv.mongodb.net/schooldb");
var db = mong.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occured"));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})