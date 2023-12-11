import React, { useState } from 'react'
const Searchbar = () => {

  const array = [
         {id:1, name:"Rahul", Work:"Student"},
         {id:2, name:"shyam", Work:"Developer"},
         {id:3, name:"Ashwani nirmal", Work:"Businessman"},
         {id:4, name:"Mishra", Work:"Lawyer"},
         {id:5, name:"Ashwani", Work:"Policeman"},
         {id:6, name:"krishna", Work:"Speaker"},
         {id:7, name:"Vansh", Work:"Sportsman"},
         {id:8, name:"Rajiv", Work:"Banker"},
         {id:9, name:"Rahul", Work:"Archetecture"},
         {id:10, name:"Pradeep", Work:"Student"}
  ]
  const [data, setData] = useState(array);
  const [searchterm, setSearchterm] = useState("")
  const handlesearch = (e) =>{
     setSearchterm(e.target.value.toLowerCase());
     const FilterData = array.filter(item =>
      item.name.toLowerCase().includes(searchterm) ||
      item.Work.toLowerCase().includes(searchterm)
     );
     setData(FilterData)
  }
  return (
    <div style={{textAlign:"center"}}>
        <input className="border" type='text' placeholder='search...' value={searchterm} onChange={handlesearch} />
        <button className='border 2px solid black rounded-md bg-green-600 px-2 mx-4' onClick={handlesearch} >Search</button>
        {data.map((item, id) =>(
          <li style={{listStyle:"none"}} key={id}>{item.name} ({item.Work})</li>
        ))}
    </div>
  )
}

export default Searchbar;



