const express = require('express');
const argon2 = require('argon2');
const jwt = require("jsonwebtoken");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const nodemailer=require('nodemailer')
const PORT = process.env.PORT || 5000;
const cors=require('cors');
//import routes
const authRoutes = require("./routes/auth");
const  SECRET_KEY=process.env.SECRET_KEY


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(cors({
origin:'http://localhost:5173',

method:['GET','POST','DELETE','PUT'],
Credential:true

}));



// register send mail
//  const transporter = nodemailer.createTransport({
//     host: 'smtp.mailersend.net', 
//     port: 587, 
//     secure: false, 
//     auth: {
//       user: process.env.SMTP_USERNAME, 
//       pass: process.env.SMTP_PASSWORD
//    },
//   });

//db connection
mongoose.set("strictQuery", false);
 
const uri = process.env.MONGO_URI
 mongoose.connect(uri)
 .then(()=>{
    console.log('')
 })









//Authentication
function authenticateJWT(req, res, next) {
    const token = req.session.token;
  
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
  function requireAuth(req, res, next) {
    const token = req.session.token;
  
    if (!token) return res.redirect("/login");
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      return res.redirect("/login");p
    }
  }  

//Register


  //Login

// Route kullanımı
app.use("/auth", authRoutes);
// app.use("/tasks", taskRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
