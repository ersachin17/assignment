import React from 'react'

function InputControl(props) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
         {props.label && <label style={{fontWeight:"700", fontSize:"1rem"}}>{props.label}</label>}
         <input style={{borderRadius:"5px", border:"1px solid purple", outline:"none", padding:"8px 15px"}} type='text' {...props} />
    </div>
  )
}

export default InputControl
