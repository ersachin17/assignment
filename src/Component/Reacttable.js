import React ,{useEffect,useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from 'axios'
function Reacttable (){
     const [originaldata, setOriginaldata] = useState([])
    const [data, setData] = useState([]);
    const [searchterm, setSearchterm] = useState("")
    const getnbadata = async => {
            axios.get("https://www.balldontlie.io/api/v1/teams").then(res => {
            setData(res.data.data);
            setOriginaldata(res.data.data);
           })
    } 
    useEffect(() =>{
        getnbadata();
    }, []);
    const columns = [
        { field:"id", headerName:"ID", width:90},
         { field:"city",headerName:"City", width:150},
        { field:"abbreviation",headerName:"Abbreviation", width:150},
        { field:"conference",headerName:"Conference", width:150},
        { field:"division",headerName:"Division", width:150}
    ]
    const rows = data.map((row)=>({
        id:row.id,
        abbreviation: row.abbreviation,
        city: row.city,
        conference: row.conference,
        division: row.division
    }))
    // console.log(data)
    const searchhandle =(event) =>{
       const searchterm = event.target.value.toLowerCase();
       setSearchterm(searchterm);
    
        const filterdata = originaldata.filter((item )=>
          item.id.toString().toLowerCase().includes(searchterm) ||
          item.city.toLowerCase().includes(searchterm) ||
          item.abbreviation.toLowerCase().includes(searchterm) ||
          item.conference.toLowerCase().includes(searchterm) ||
          item.division.toLowerCase().includes(searchterm) 
          );
          setData(filterdata);
    };
     return (
    <div>
      <input type='text'  placeholder='search...' value={searchterm} onChange={searchhandle}/>
      <button onClick={getnbadata}>Search</button>
      <DataGrid rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default Reacttable;

