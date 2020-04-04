const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/student");

exports.student_signup = async (req, res, next) => {
  
    const alreadystudent = await Student.findOne({email: req.body.email});
  
    if(alreadystudent){
      return res.status(404).json({
        msg : "Email already exist"
      });
    }
  
    const student =new Student({
      _id: new mongoose.Types.ObjectId(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mobileno: req.body.mobileno,
      email: req.body.email,
      username: req.body.username
    });
  
    student.save().then((response) =>{
      res.status(200).json({ msg: "Registration Successful" });
    }).catch((error)=>{
      res.status(500).json({ msg: "Registration failed" });
    });
    
  };
  

  exports.student_show = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const student = await Student.find({ });
  
    if(!student) {
      return res.status(404).json({
        msg : "show Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "show Successful",
        student: student
      });
    }
      
  };
  exports.student_showone = async (req, res, next) => {
    console.log(req.body.id)
    const student = await Student.findOne({_id:req.body.id });
  
    if(!student) {
      return res.status(404).json({
        msg : "show Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "show Successful",
        student: student
      });
    }
      
  };

  exports.student_update = async (req, res, next) => {
    console.log(req.body._id);
        const student = await Student.update({_id: req.body._id},{firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,mobileno:req.body.mobileno,username:req.body.username});
        
      
        if(!student) {
          return res.status(404).json({
            msg : "update Failed"
          });
        }
        else{
          return res.status(201).json({
            msg : "update Successful",
          });
        }
      
  };


  exports.student_delete = async (req, res, next) => {
    const id=req.params.id;
    console.log(id);
    
    const student = await Student.deleteOne({_id: id });
    
  
    if(!student) {
      return res.status(404).json({
        msg : "delete Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "delete Successful",
      });
    }

  
}