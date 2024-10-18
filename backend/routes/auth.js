const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const {User,Task} = require("../models/models"); // user model?
const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;





//register end point

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  
      if (existingUser)
        return res.status(400).json({ message: "User already exists" });
  
      // Using argon2
    
        const hashedPassword = await argon2.hash(password);

      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
  
      // E-mail sending process
    //   const mailOptions = {
    //     from: process.env.SMTP_USERNAME, 
    //     to: email, 
    //     subject: "Welcome to MindDots",
    //     html: `
    //         <h1>Welcome, ${username}!</h1>
    //         <p>Your registration has been successfully completed.</p>
    //         <p>You can click the button below to log in:</p>
    //         <a href="${process.env.SMTP_LINK}" style="display: inline-block; padding: 10px 20px; background-color: #0099ff; color: white; text-decoration: none; border-radius: 5px;">Log In</a>
    //         <p>"Fill your paper with the breathings of your heart." — William Wordsworth</p>
    //     `,
    // };
    // // E-posta gönder
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error("Failed to send email:", error);
    //         return res.status(500).json({ message: "Failed to send email" });
    //     }
    //     // console.log("Email sent:", info.response);
    // });
      const token = jwt.sign(
        { userId: newUser._id, username: newUser.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      req.session.token = token;
  
      // Success
    //   res.send(`<h1>The user ${username} has been successfully registered!</h1>
    //             <p>Please check your email for confirmation.</p>
    //             <script>setTimeout(function() { window.location.href = '/login'; }, 3800);</script>`);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'Internal Server Error' });
    // }

    res.status(201).json({
        message:`The user ${username}has been succesfully registered`,
        user: {username,email}
    });
}
catch(error){
    console.error(error)
    res.status(500).json({message:"Internal server error"})
}

  });


  //login endpoint

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
  
      const user = await User.findOne({ username,});

      if (!user) return res.status(401).json({ message: "Invalid credentials" });
  
  const isPasswordValid=await argon2.verify(user.password,password)

  if(!isPasswordValid)
      return res.status(401).json({message:"Invalid password"})
  
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      req.session.token = token;
  
      
      res.json({token,username:user.username})
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  module.exports = router;