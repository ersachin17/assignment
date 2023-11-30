import React, { useState } from 'react'

const Addcomponent = () => {
    const [val, setVal] = useState([])
    const handeldadd = () =>{
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange= (onChangeValue, i) =>{
const inputdata = [...val]
inputdata[i] = onChangeValue.target.value;
  setVal(inputdata)
    }
     const handledelete = (i) =>{
           const deletval = [...val]
           deletval.splice(i, 1)
            setVal(deletval)
     }
    console.log(val, "data")
  return (
    <div style={{textAlign:'center'}}>
        <button style={{padding:"5px 20px", backgroundColor:"green", margin:"15px 0px", borderRadius:"6px"}} onClick={()=> handeldadd()}>Add Component</button>
        {val.map((data,i) => {
            return( 
            <div>
                <input value={data } onChange={e => handleChange(e,i)}/>
               <button onClick={()=> handledelete(i)} >X</button>
            </div>
            )
        })}
    </div>
  )
}

export default Addcomponent

