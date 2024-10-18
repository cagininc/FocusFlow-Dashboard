
import { Todo } from "../types/todo.ts"
import { Trash2,Timer } from "lucide-react";
// import loginImage from "../images/midnight.jpeg"



interface TodoItemProps{
    todo:Todo;
    onCompletedChange:(id:number,completed:boolean)=> void;
    onDelete:(id:number)=>void
}

export default function TodoItem({todo,onCompletedChange,onDelete}:TodoItemProps){


    return(


        <div className="flex items-center gap-1" >
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg--white hover:bg-slate-50 grow">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e)=>onCompletedChange(todo.id,e.target.checked)}
                className="scale-125"/>
                <span className={todo.completed? "line-through text-gray-400":""}>{todo.title}</span>
                <span>
                <button  onClick={()=>onDelete(todo.id)} className="p-2" >
                     <Timer size={20} className="text-gray-500"/>
                    </button>
                </span>
                </label>
                <button  onClick={()=>onDelete(todo.id)} className="p-2" >
                     <Trash2 size={20} className="text-gray-500"/>
                    </button>
                
                </div>
               
               
    )
}
