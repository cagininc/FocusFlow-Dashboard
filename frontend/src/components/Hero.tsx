
import { Link,useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import focusFlowhero from '../images/hero.jpeg';
import { useEffect } from "react";


export default function Hero(){

  const navigate=useNavigate()
useEffect(() => {
  const token=localStorage.getItem("token")
  if(token){
navigate("/todos")
  }


}, [])



    return(
        <section
        className="py-10   h-screen  space-y-5 overflow-y-auto  bg-cover bg-center"
                style={{ backgroundImage: `url(${focusFlowhero})` }}
        >
      <h1 className="text-3xl font-bold text-white mb-20">
     
      </h1>
      <p className="text-xl text-white mb-8">
        
      </p>
      <Link to="/register">
      <motion.button
          className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 transition mb-20"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}   
        >
          Get Started
        </motion.button>
      </Link>
    </section>
    
  
  );
};
