
import React from 'react';
import { Link } from "react-router-dom";
import loginImage from "../images/rainy.jpeg";
import { useState } from "react";




export default function Register() {
  

  const [username, setUsername] = useState<string>("")

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [errorMessage, setErrorMessage] =useState<string>("")

  //sending form
  const handleSubmit=async(e:React.FormEvent)=>{
e.preventDefault();
//
if(!username||!email||!password)
{setErrorMessage("Please fill in all fields")
  return
};

try{
  //send data to backend
  const response= await fetch("http://localhost:5000/auth/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({username,email,password})
  
  })
const data=await response.json();
console.log(data)
if (response.ok){
  //message?
  console.log("data gönderildi backende")
  setTimeout(() => {
    window.location.href = "/login"; // Login sayfasına yönlendirme
  }, 3000);}
  else{setErrorMessage("Registration failed")}
}
catch(error){
  setErrorMessage("Error submitting form ");
  console.error("Error submitting form:",error)
}

  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
        {/* Conditional Rendering for error */}
        {errorMessage && (
          <div id="error-message" className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form id="registerform" onSubmit={handleSubmit} method="post" className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
