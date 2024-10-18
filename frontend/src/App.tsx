
import AddTodoForm from "./components/AddTodoForm";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos  from "./hooks/useTodos";
import Register from "./components/Register";
import loginImage from "./images/new.jpeg"
import Pomodoro from "./components/Pomodoro";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();


  return (
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
        <Route path="">element={
          

          
          }

        </Route>
      </Routes>

    </Router>
    
  );
}

export default App;
