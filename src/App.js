import Form from './Component/Form';
import './App.css';
import ToggleButton from './Component/ToggleButton';
import Todo from './Component/Todo';
import React, { useState } from 'react';
import Addcomponent from './Component/Addcomponent';
import Addtwonumb from './Component/Addtwonumb';
import Increadecremet from './Component/Increadecremet';
import Searchbar from './Component/Searchbar';
import Reacttable from './Component/Reacttable';
import Dragdrop from './Component/Dragdrop'
import List from './Component/List';
import {Toaster} from "react-hot-toast"
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  const [tasks, setTasks]= useState([]);
 
  return (
    <div >
      <Form className='app' />
      <ToggleButton />
        <Todo/>
        <Addcomponent/>
        <Addtwonumb />
        <Increadecremet />
        <Searchbar/>
        <Reacttable/>
        <DndProvider DndProvider backend={HTML5Backend}>
        <Toaster/>
          <div className="bg-slate-100  mt-24 flex flex-col items-center " >
        <Dragdrop  tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
          </div>
        </DndProvider>
    </div>
  );
}

export default App;

