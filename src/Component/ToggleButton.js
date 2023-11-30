import React, { useState } from 'react';
import './Toggle.css'
   const ToggleButton = () => {
    const [isleft, setIsleft] = useState(false);
        const onchanghandler = () =>{
            setIsleft(!isleft)
        }
    return(
     <div style={{display:'flex', justifyContent:"center", flexDirection:'column', alignItems:'center'}} >
         {/* <input type='checkbox'></input> */}
         {/* <label htmlFor='toggle' className='switch'></label> */}
         <button  htmlFor='toggle' className='switch' onClick={onchanghandler}> {isleft ? "on" : "off"}</button><br/>
         <h3>{isleft ? "Disable the element" : "Enable the element"}</h3>
     </div> 
    )    
};

export default ToggleButton;
