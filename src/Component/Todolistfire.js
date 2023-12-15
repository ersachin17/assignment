import React,{useState} from "react";
import { dataref } from "./FirebaseTodo";
 
function Todolistfire() {
    const [tasktittle, setTasktittle] = useState("");
    const [taskdesc, setTaskdesc] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskpriority, setTaskpriority] = useState("");
    const handleAdd = () =>{
        dataref.ref("user").set({
           tasktittle: tasktittle,
            taskdesc: taskdesc,
            taskDate: taskDate,
             taskpriority:taskpriority,
        }).catch(alert);
    }
   return (
     <div>
        <input value={tasktittle} onChange={(e) => {setTasktittle(e.target.value)}}/>
        <input value={taskdesc} onChange={(e) => {setTaskdesc(e.target.value)}}/>
        <input value={taskDate} onChange={(e) => {setTaskDate(e.target.value)}}/>
        <input value={taskpriority} onChange={(e) => {setTaskpriority(e.target.value)}}/>
        <button onClick={handleAdd}>Add Task</button>
     </div>
   )
 }
 
 export default Todolistfire
 