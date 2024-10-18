const mongoose = require("mongoose");


const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String,
  });
  const Task = mongoose.model("Task", {
    userId: mongoose.Schema.Types.ObjectId,
    text: String,
  });
  
  module.exports={User,Task};