const express = require("express");
const studentSchema = require("../model/studentSchema");
const mongoose = require("mongoose");
const studentRoute = express.Router();

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);

    })
})

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else  
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
})
// _id -> object id of a specific record
// http://localhost:4000/studentRoute/update-student/652cc521d823421189812b3c
module.exports = studentRoute;