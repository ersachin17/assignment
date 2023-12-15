import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    <div className='text-center bg-purple-600 text-white p-9 rounded-md' style={{border:"2px solid black",width:"300px", height:"300px",margin:"auto"}}>
      <div>
        <h1>
            <Link to="/login">Login</Link>
        </h1><br/>
        <h1>
           <Link to="/signup">Signup</Link> 
        </h1>
      </div><br/><br/><br/>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  )
}

export default Home
