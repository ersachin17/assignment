import Form from './Component/Form';
import './App.css';
import ToggleButton from'./Component/ToggleButton';
import Todo from './Component/Todo';
import React, {useEffect, useState} from 'react';
import Addcomponent from './Component/Addcomponent';
import Addtwonumb from './Component/Addtwonumb';
import Increadecremet from './Component/Increadecremet';
import Searchbar from './Component/Searchbar';
import Reacttable from './Component/Reacttable';
import Dragdrop from './Component/Dragdrop';
import List from './Component/List';
import {Toaster} from "react-hot-toast";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import { auth } from './Component/firebase';
// import Todolistfire from './Component/Todolistfire';
function App() {
     const [userName, setUserName] = useState("");
     useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
         setUserName(user.displayName);
        }else setUserName(" ");
      });
     },[])
  const [tasks, setTasks]= useState([]);
  return (
    <div >
      <Form className='app'/>
      <ToggleButton/>
        <Todo/>
        <Addcomponent/>
        <Addtwonumb/>
        <Increadecremet/>
        <Searchbar/>
        <Reacttable/>
        <DndProvider DndProvider backend={HTML5Backend}>
        <Toaster/>
       <div className="bg-slate-100 mt-24 flex flex-col items-center">
        <Dragdrop  tasks={tasks} setTasks={setTasks}/>
        <List tasks={tasks} setTasks={setTasks}/>
        </div>
        </DndProvider>
        <div className='pt-24'>
        <Router>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/'element={<Home name={userName}/>}/>
            </Routes>
          </Router>
        </div>
        {/* <Todolistfire/> */}
    </div>
  );
}
export default App;

