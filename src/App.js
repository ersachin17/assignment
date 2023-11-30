import Form from './Component/Form';
import './App.css';
import ToggleButton from './Component/ToggleButton';
import Todo from './Component/Todo';
import React,{ useState } from 'react';
import Addcomponent from './Component/Addcomponent';
import Addtwonumb from './Component/Addtwonumb';
function App() {
  return (
    <div >
      <Form className='app' />
      <ToggleButton />
        <Todo/>
        <Addcomponent/>
        <Addtwonumb />
    </div>
  );
}

export default App;

