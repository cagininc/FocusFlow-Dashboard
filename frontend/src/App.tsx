
import AddTodoForm from "./components/AddTodoForm";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos  from "./hooks/useTodos";
import Register from "./components/Register";
import loginImage from "./images/new.jpeg"
import Pomodoro from "./components/Pomodoro";
import { LogOut,Settings,ChartSpline } from "lucide-react"; 
 import SettingsPanel from "./components/SettingsPanel";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { PomodoroProvider } from "./context/PomodoroContext";


function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
    onLogout
  } = useTodos();



  const [showSettings, setshowSettings] = useState(false)

  const toggleSettingsPanel=()=>{setshowSettings(!showSettings);};

  return (
    <PomodoroProvider>
    <Router>
      <Routes>
        {/*Hero componenti */}
        <Route path="/" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              <Hero />
            </motion.div>
          </AnimatePresence>
        } />
        {/* Register */}
        <Route path="/register" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              >
              <Register />
            </motion.div>
          </AnimatePresence>
        } />
        {/*Login  */}
        <Route path="/login" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              >
              <Login />
            </motion.div>
          </AnimatePresence>
        } />

        {/* Todo list route */}
        <Route path="/todos" element={
          <AnimatePresence mode="wait">
            
       
            
            
            <motion.main
               initial={{ opacity: 0, y: -10 }}   // Smaller y movement for a more subtle effect
               animate={{ opacity: 1, y: 0 }}     // Moves back to original position smoothly
               exit={{ opacity: 0, y: 10 }}       // Soft exit motion
               transition={{ duration: 0.5, ease: "easeInOut" }} 
              className="py-10 h-screen w-screen  space-y-5 overflow-y-auto bg-cover bg-center"style={{ backgroundImage: `url(${loginImage})` }}
            >
      <div className="fixed top-0 right-0 p-4 space-x-2 z-10">


      <Link to="/Dashboard">

      <button  className="text-white p-2 rounded hover:bg-gray-400">
          <ChartSpline size={25} />
        </button>
        </Link>
        <button  onClick={toggleSettingsPanel} className=" text-white p-2 rounded hover:bg-gray-400">
          <Settings size={25} />
        </button>
        <button  onClick={onLogout} className="text-white p-2 rounded hover:bg-gray-400">
          <LogOut  size={25} />
        </button>
        <SettingsPanel show={showSettings} onClose={toggleSettingsPanel}/>

        </div>
         
              <h1 className=" text-white font-bold text-3xl text-center">FocusFlow</h1>
              <motion.div
    
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5}}
                className="max-w-lg mx-auto  bg-slate-50  rounded-lg   p-5 space-y-6 "
              >
                
                <Pomodoro/>
                <AddTodoForm  onSubmit={addTodo}/>
                <TodoList 
                onDelete={deleteTodo}
                todos={todos}
                onCompletedChange={setTodoCompleted}/>
                                    <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />


              </motion.div>
              
            </motion.main>
            
          </AnimatePresence>
        } />
        <Route path="/Dashboard" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              >
              <Dashboard />
            </motion.div>
          </AnimatePresence>
        } />

      
      </Routes>

    </Router>
    </PomodoroProvider>
    
  );
}

export default App;
