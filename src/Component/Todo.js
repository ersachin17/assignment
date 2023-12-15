import React, { useState } from 'react'

function Todo() {
    const [input, setInput] = useState("")
    const onhandler = (e) =>{
        console.log(e.target.value);
        setInput(e.target.value)
        
    }
  return (
    <div style={{textAlign:"center"}}>
      <h3>Two way  Binding</h3>
      <input className='mt-6' type='text' placeholder='Firstname'name='name' value={input} onChange={onhandler} />
      <h3>Firstname</h3>
      <h2 style={{ color:'purple'}}>{input}</h2>
    </div>
  )
}

export default Todo;
