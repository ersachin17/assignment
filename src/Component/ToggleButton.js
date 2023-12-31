import React, { useState } from 'react'
import './Toggle.css'
const ToggleButton = () => {
    const [togglebtn, setTogglebtn] = useState(false);
    const handleclick =() =>{
        setTogglebtn(!togglebtn)
        console.log(togglebtn, "value")
    }
  return (
    <div className='App mt-6'>
      <div onClick={handleclick} className='toggle'>
        {togglebtn ?<div className='toggle-left'>Of</div>:
        <div className='toggleright'>On</div>}
      </div>
      <p style={{padding:"5px 20px", backgroundColor:"green", margin:"15px 0px", borderRadius:"6px"}}>{togglebtn ? "Enable Button" : "Disable Button"}</p>
    
    </div>
  )
}

export default ToggleButton

