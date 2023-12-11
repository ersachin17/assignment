import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";

const List = ({tasks, setTasks}) =>{
   const [todos, setTodos] =useState([]);
     const [today, setToday] =useState([]);
     const [tomorrow, setTomorrow] =useState([]);
     const [thisweek, setThisweek] =useState([]);
     const [nextweek, setNextweek] =useState([]);
     useEffect(() =>{
        const filtertodos = tasks.filter(task =>task.status === "todo");
        const filtertoday = tasks.filter(task =>task.status === "today");
        const filtertomorrow = tasks.filter(task =>task.status === "tomorrow");
        const filterthisweek = tasks.filter(task =>task.status === "thisweek");
        const filternextweek = tasks.filter(task =>task.status === "nextweek");
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
          setTasks(storedTasks)
        setTodos(filtertodos)
        setToday(filtertoday)
        setTomorrow(filtertomorrow)
        setThisweek(filterthisweek)
        setNextweek(filternextweek)
     },[tasks]);
      const statuses = ["todo","today", "tomorrow", "thisweek", "nextweek"]
    return(
       <div className="flex gap-16">
       {statuses.map((status, index)=>(
       <Section
        key={index}
         status={status}
         tasks={tasks}
         setTasks={setTasks}
         todos={todos}
         today={today}
         tomorrow={tomorrow}
         thisweek={thisweek}
         nextweek={nextweek}
         />
       ))}
       </div>
    )
   }
   export default List;
     
      const Section = ({status, tasks,setTasks, todos,today,tomorrow,thisweek,nextweek}) => {
         const [{isOver}, drop] = useDrop(()=>({
            accept:"task",
            drop:(item)=> addItemToSection(item.id),
            collect: (monitor) => ({
               isOver: !!monitor.isOver()
            }),
          }))
         let text = "Todo";
         let bg = "bg-blue-600";
         let tasksToMap = todos
         
             if(status === "today"){
               text = "Today"
               bg = "bg-purple-600";
               tasksToMap = today;
             }
             if(status === "tomorrow"){
               text = "Tomorrow";
               bg = "bg-purple-600";
               tasksToMap = tomorrow;
             }
             if(status === "thisweek"){
               text = "This Week";
               bg = "bg-purple-600";
               tasksToMap = thisweek;
             }
             if(status === "nextweek"){
               text = "Next Week";
               bg = "bg-purple-600";
               tasksToMap = nextweek;
             }
              const addItemToSection = (id) =>{
                setTasks((prev )=>{
                  const mtasks = prev.map((t)=>{
                     if(t.id === id){
                        return {...t, status:status};
                     }
                     return t;
                  });
                  localStorage.setItem("tasks", JSON.stringify(mtasks));
                  // toast ("task status changed", {icon:"taskchange"});
                  //   localStorage.getItem(mtasks) 
                    return mtasks  
                });
              };
         return (
             <div ref={drop} className={`w-48 mt-20 ${isOver ? "bg-slate-200" :" "}`}>
              <Header text={text} bg={bg} count={tasksToMap.length}/>
              {tasksToMap.length > 0 && 
              tasksToMap.map((task) => (
              <Task key={task.id} tasks={tasks} task={task} setTasks={setTasks}/>
              ))}
         </div>
          );
      };
      const Header = ({text,bg, count}) => {
         return (
         <div
          className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white `}>
            {text}
         <div 
         className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
            {count}
            </div>
            </div>
         );
      };
      const Task = ({task, tasks, setTasks}) => {
          const [{isDragging}, drag] = useDrag(()=>({
            type:"task",
            item: {id: task.id},
            collect: (monitor) => ({
               isDragging: !!monitor.isDragging()
            })
          }))
         //  console.log(isDragging)
         const handleremove = (id) =>{
                const fTasks = tasks.filter((t) => t.id !== id)
                localStorage.setItem("tasks", JSON.stringify(fTasks));
                setTasks(fTasks);
                toast("Task removed", {icon:"removed"});
         };
         return(
          <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25" : "opacity-100"} cursor-grab`}>
    <p>{task.name}</p>
    <button className="absolute" onClick={() => handleremove(task.id)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    </button>
         </div>

         );
      };