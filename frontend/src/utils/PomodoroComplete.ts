// utils/pomodoroUtils.ts
import axios from 'axios'
export  async function handlePomodoroComplete(taskContent: string, duration: number ) {
    
    //use token
    const token = localStorage.getItem("token");
      if(!token)
    { window.location.href = "/login"; // Login 
    }
    
    
    
  

    try{
        
    const response =await axios.post("http://localhost:5000/tasks/complete",{

        taskContent,duration
    },{ headers:{Authorization:`Bearer${token}`,}});

//success
if(response.status===200){
    console.log(`Task saved to db`,response.data)
}
else{console.log('Error saving to the DB')}

    }
    catch(error){
        console.error("An error ocurred:",error)
    }
}