import React, { useState } from 'react'

const Increadecremet = () => {
    const [count, setCount] = useState(0);
    const onIncreament = () =>{
        setCount(count +1)
    }
    const ondcreament = () =>{
        setCount(count -1)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Counter : {count}</h2>
      <button style={{padding:"5px 20px", backgroundColor:"green", margin:"15px 0px", borderRadius:"6px", margin:"0px 5px"}} onClick={onIncreament} >Increament</button>
      <button style={{padding:"5px 20px", backgroundColor:"green", margin:"15px 0px", borderRadius:"6px"}} onClick={ondcreament} >Decreament</button>
    </div>
  )
}

export default Increadecremet
