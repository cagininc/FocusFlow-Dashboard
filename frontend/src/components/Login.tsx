
import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import loginImage from "../images/midnight.jpeg"
export default function Login() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("")


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!username || !password) {
      setErrorMessage("Please fill in all fields")
      return
    };
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        
        body: JSON.stringify({ username, password }),

      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "Login failed");

      } else {
        //success
        const data= await response.json()
        console.log("login succesfull")
        localStorage.setItem("token",data.token);
        localStorage.setItem("username",data.username)
      
          window.location.href = "/todos"; // Login sayfasına yönlendirme
      ;
      }

    }


    catch (error) {
     
      setErrorMessage(` ${error} An error ocurred please try again later`)
    }

  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login to FocusFlow</h1>
        {errorMessage && (
          <div
            id="error-message"
            className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form id="loginform" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* <Link to="/todos"> */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          {/* </Link  > */}
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
