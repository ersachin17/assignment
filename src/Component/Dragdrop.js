import { useState } from 'react';
  import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';

  
    
   const Dragdrop = ({tasks, setTasks}) =>{
      const [task, setTask] = useState({
         id:" ",
         name:" ",
         status:"todo"
      });
      
      const handlesubmit = (e) =>{
         e.preventDefault();
          
         if(task.name.length < 3) return toast.error("A task must have more than 3 characters");
         if(task.name.length > 100) return toast.error("A task must not be  more than 100 characters");
         
         setTasks((prev) =>{
            const  list =[...prev, task]
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
         });
         toast.success("Task Created")
         setTask({
            id:" ",
            name:" ",
            status:"todo"
         })
      };
    return(
       <div >
            <form onSubmit={handlesubmit}>
               <input value={task.name} type='text' className='border-2 border-slate-400 bg-slate-100 rounded-md h-12 w-64 px-1' onChange={(e) => setTask({...task, id:uuid(), name:e.target.value})}/>
               <button className='bg-cyan-500 rounded-md px-4  ml-4 h-12 text-white'>Add Task</button>
            </form>
       </div>
    )
   }
   export default Dragdrop;
