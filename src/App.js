import Form from './Component/Form';
import './App.css';
import ToggleButton from './Component/ToggleButton';
import Todo from './Component/Todo';
import React,{ useState } from 'react';
import Addcomponent from './Component/Addcomponent';
import Addtwonumb from './Component/Addtwonumb';
import Increadecremet from './Component/Increadecremet';
import Searchbar from './Component/Searchbar';
function App() {
  return (
    <div >
      <Form className='app' />
      <ToggleButton />
        <Todo/>
        <Addcomponent/>
        <Addtwonumb />
        <Increadecremet />
        <Searchbar/>
    </div>
  );
}

export default App;

