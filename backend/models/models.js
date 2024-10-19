const mongoose = require("mongoose");


const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String,
  });
  const Task = mongoose.model("Task", {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
      ref: "User", 
    },
    text: {
      type: String,
      required: true, 
    
    },
    duration: {
      type: Number,
      required: true,
    },
    taskDate: {
      type: Date,

      default: Date.now, // Varsayılan tarih olarak şu anki zamanı ayarla
    },
  
  });
  
  module.exports={User,Task};