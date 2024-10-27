//Database Schema for SignUp

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    middleName:{
        type: String,
        require: false,
    },
    DOB:{
        type:Date,
        req: true,
    },
    email:{
        type:email,
        req:true,
    },
    phoneNo:{
        type:Number,
        req:true,
    },
    pwd:{
        type:password,
        req:true,
    }
})

//define the collection name
const User = new mongoose.model("SignUp_detail",userSchema)

module.exports = User