const express = require("express");
const {User,Task} = require("../models/models"); // models
const router = express.Router();
const jwt = require("jsonwebtoken");
const  SECRET_KEY=process.env.SECRET_KEY


router.post("/tasks/complete", async (req, res) => {
    const { taskContent, duration} = req.body;
const token=req.headers.authorization?.split("")[1]
 if(!token){
   res.status(401)
 }
try{
    const decodedToken=jwt.verify(token,process.env.SECRET_KEY)
  //  add newTask
  const newTask = new Task({
    userId, 
    text: taskName,
    duration,
    date:Date.now()
  });

 
    // save task to the DB
    await newTask.save();
    res.status(200).json({ success: true, task: newTask });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports=router