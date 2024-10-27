const express = require("express")
const router = express.Router();
const User = require("../models/user-model")

const home = async(req,res)=>{
   try{
       res.status(200).send("Wlc to homepage")
   }catch(error){
    console.log(error);
   }
};

const register = async(req,res) =>{
  try{
    const {firstName,lastName,middleName,DOB,email,phoneNo,pwd} = req.body;
    
    const UserExist = User.findOne({email:email});
    if(UserExist){
        return res.status(400).json({msg:"email already exists"})
    }
    await User.create({firstName,lastName,middleName,DOB,email,phoneNo,pwd});

    res.status(200).json({data});
  }catch(error){
    res.status(400).send({msg : "page not found"})
  }
}

module.exports = {home,register};


