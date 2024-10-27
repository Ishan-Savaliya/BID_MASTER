const express = require("express")
const app = express()
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send('Welcome');
 });

router.post("/AddProducts",(req,res)=>{
    res.status(200).send("ProductAdded");
 })

 module.exports = router

 
 