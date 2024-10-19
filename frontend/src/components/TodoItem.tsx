
import { useState } from "react";
import { Todo } from "../types/todo.ts"
import { Trash2,Timer,Plus,Minus } from "lucide-react";
// import loginImage from "../images/midnight.jpeg"



interface TodoItemProps{
    todo:Todo;
    onCompletedChange:(id:number,completed:boolean)=> void;
    onDelete:(id:number)=>void
}

export default function TodoItem({todo,onCompletedChange,onDelete}:TodoItemProps){

    const [pomodoroCount, setpomodoroCount] = useState(0)

    return(


        <div className="flex items-center gap-1" >
            <label className=" justify-between flex items-center gap-2 border rounded-md p-2 border-gray-400 bg--white hover:bg-slate-50 grow">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e)=>onCompletedChange(todo.id,e.target.checked)}
                className="scale-125"/>
                <span className={todo.completed? "line-through text-gray-400":""}>{todo.title}</span>
                <span>
                    <div className="flex items-center gap-2 ml-auto">
                <button  onClick={()=>setpomodoroCount(pomodoroCount+1)} disabled={pomodoroCount>=5} className="p-1 hover:bg-gray-200" >
                     <Plus size={15} className="text-gray-500"/>
                    </button>
                    <button  onClick={()=>setpomodoroCount(pomodoroCount-1)} disabled={pomodoroCount<=0} className="p-1  hover:bg-gray-200" >
                     <Minus size={15}   className="text-gray-500 "/>
                    </button>
                    </div>
                </span>
                <span  className="bg white text-black p-1">{pomodoroCount}</span>
                <Timer size={20} className="text-gray-500"/>
                </label>
                <button  onClick={()=>onDelete(todo.id)} className="p-2" >
                     <Trash2 size={20} className="text-gray-500"/>
                    </button>
                
                </div>
               
               
    )
}
