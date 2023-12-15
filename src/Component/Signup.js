import React, { useState } from 'react'
import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from './firebase'
function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [submitbutton, setSubmitbutton] = useState(false);
    const [value, setValue] = useState({
        email:" ",
        pass:" ",
    });
    const handlesubmit = ()=> {
       if (!value.name || !value.email || !value.pass){
        setError("Please fill all fields");
        return;
       }
         setError(" ");
         setSubmitbutton(true);
        createUserWithEmailAndPassword(auth, value.email, value.pass).then(async(res)=> {
            setSubmitbutton(false);
           const user = res.user;
          await updateProfile(user, {
            displayName:value.name,
           });
          navigate("/")
           console.log(user);
        }
        ).catch((err)=> {
            setSubmitbutton(false);
            setError(err.message);
            });
    };
    
  return (
    <div style={{height:"100%", minHeight:"100vh", width:"100%", backgroundColor:"purple",display:"flex",justifyContent:"center", alignItems:"center"}}>
    <div style={{minWidth:"480px", height:"fit-content",width:"fit-content", backgroundColor:"white",padding:"30px", borderRadius:"10px",display:"flex", flexDirection:"column",gap:"30px"}}>
  <h1 className='font-bold text-2xl font-serif'>Signup</h1>
  <InputControl 
  label="Name"
   placeholder="Enter your name"
   onChange={(event)=> setValue((prev)=>({...prev, name: event.target.value}))}
   />
  <InputControl 
  label="Email"
   placeholder="Enter email address"
   onChange={(event)=> setValue((prev)=>({...prev, email: event.target.value}))}
   />
  <InputControl 
  label="Password"
  placeholder="Enter your password"
  onChange={(event)=> setValue((prev)=>({...prev, pass: event.target.value}))}
  />
  <div className='flex flex-col gap-2.5'>
    <b className='font-bold text-xs text-red-500 text-center'>{error}</b>
    <button className='button' onClick={handlesubmit} disabled={submitbutton}>Signup</button>
    <p>
      Already have an account?{''}
      <span>
     <Link to='/login'>Login</Link>
     </span>
    </p>
  </div>
    </div>
  </div>
  )
};

export default Signup;
