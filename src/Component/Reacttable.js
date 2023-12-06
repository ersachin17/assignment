import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const DataTable = () => {
  const [data, setData] = useState([
    { id: 3, customername: 'Bob Smith', lastseen: '2023-01-15', orders: '21',totalspent:'200$', latestpurchase:'2023-01-12 /9:34pm', news:'X', segment:'Regulara'  },
    { id: 4, customername: 'advait singh', lastseen: '2023-01-16', orders: '11',totalspent:'90$', latestpurchase:'2023-01-08/11:34pm', news:'X', segment:'inactive'  },
    { id: 5, customername: 'Rohit sharma', lastseen: '2023-01-18', orders: '10',totalspent:'100$', latestpurchase:'2023-01-02 /1:34pm', news:'X', segment:'ordered once'  },
    { id: 6, customername: 'amrita das', lastseen: '2023-01-12', orders: '21',totalspent:'250$', latestpurchase:'2023-01-13 /2:4pm', news:'X', segment:'Regular'  },
    { id: 7, customername: 'Ravi Bishnoi', lastseen: '2023-01-28', orders: '19',totalspent:'120$', latestpurchase:'2023-01-08 /9:14pm', news:'X', segment:'ordered once'  },
    { id: 8, customername: 'arjun deshmukh', lastseen: '2023-01-12', orders: '14',totalspent:'30$', latestpurchase:'2023-01-16 /12:34pm', news:'X', segment:'active'  },
    { id: 9, customername: 'Arya yadav', lastseen: '2023-01-03', orders: '13',totalspent:'150$', latestpurchase:'2023-01-19 /10:24pm', news:'X', segment:'highactive'  },
    { id: 10, customername: 'Ashwini nirmal', lastseen: '2023-01-06', orders: '20',totalspent:'200$', latestpurchase:'2023-01-09 /4:34pm', news:'X', segment:'inactive, returns'  },
    { id: 11, customername: 'Ankush sharma', lastseen: '2023-01-22', orders: '21',totalspent:'230$', latestpurchase:'2023-01-10 /1:00am', news:'X', segment:'irregular'  },
    { id: 12, customername: 'Vicky donor', lastseen: '2023-01-21', orders: '13',totalspent:'100$', latestpurchase:'2023-01-05 /2:13pm', news:'X', segment:'Regulara, collector'  },
    { id: 13, customername: 'Ankush arya', lastseen: '2023-01-24', orders: '15',totalspent:'300$', latestpurchase:'2023-01-23 /2:40pm', news:'X', segment:'Returns order'  },
    { id: 14, customername: 'Laxmi prasad', lastseen: '2023-01-21', orders: '15',totalspent:'110$', latestpurchase:'2023-01-28 /6:34pm', news:'X', segment:'Returns'  },
    { id: 15, customername: 'Nikhil singhal', lastseen: '2023-01-20', orders: '16',totalspent:'80$', latestpurchase:'2023-01-26 /7:47pm', news:'X', segment:'inactive'  },
    { id: 16, customername: 'Karan pratap', lastseen: '2023-01-13', orders: '17',totalspent:'320$', latestpurchase:'2023-01-27/5:30am', news:'X', segment:'seller'  },
    { id: 17, customername: 'Rahul yadav', lastseen: '2023-01-16', orders: '18',totalspent:'54$', latestpurchase:'2023-01-20 /1:04pm', news:'X', segment:'distribute order'  },
    { id: 18, customername: 'Ravindra singh', lastseen: '2023-01-10', orders: '19',totalspent:'130$', latestpurchase:'2023-01-29 /2:40pm', news:'X', segment:'Regular'  },
    { id: 19, customername: 'Anil jatav', lastseen: '2023-01-4', orders: '20',totalspent:'240$', latestpurchase:'2023-01-21 /8:04am', news:'X', segment:'Regular, returns'  },
    { id: 20, customername: 'Arvind kapoor', lastseen: '2023-01-18', orders: '23',totalspent:'287$', latestpurchase:'2023-01-22 /7:34pm', news:'X', segment:'Working'  },
    { id: 21, customername: 'Meghna varshney', lastseen: '2023-01-28', orders: '15',totalspent:'175$', latestpurchase:'2023-01-16 /8:40pm', news:'X', segment:'onto retuns'  },
    { id: 22, customername: 'Trapti upadhay', lastseen: '2023-01-07', orders: '13',totalspent:'10$', latestpurchase:'2023-01-14 /11:57pm', news:'X', segment:'ordered twice'  },
    { id: 23, customername: 'Lavi singh', lastseen: '2023-01-08', orders: '14',totalspent:'180$', latestpurchase:'2023-01-20 /4:30pm', news:'X', segment:'deactive'  },
    { id: 24, customername: 'Rajwant yadav', lastseen: '2023-01-26', orders: '31',totalspent:'420$', latestpurchase:'2023-01-08 /5:04pm', news:'X', segment:'Returns'  },
    { id: 25, customername: 'Lalit yadav', lastseen: '2023-01-27', orders: '25',totalspent:'150$', latestpurchase:'2023-01-25 /12:34pm', news:'X', segment:'Regular'  },
    { id: 26, customername: 'Kriti varshney', lastseen: '2023-01-18', orders: '34',totalspent:'400$', latestpurchase:'2023-01-26 /12:34pm', news:'X', segment:'Back rol'  },
    { id: 27, customername: 'Sachin Gautam', lastseen: '2023-01-20', orders: '23',totalspent:'90$', latestpurchase:'2023-01-02/12:34pm', news:'X', segment:'inactice , returns'  },
    { id: 28, customername: 'Abu saif', lastseen: '2023-01-21', orders: '23',totalspent:'134$', latestpurchase:'2023-01-22 /12:34pm', news:'X', segment:'Regular'  },
    { id: 29, customername: 'Vinod singh', lastseen: '2023-01-18', orders: '21',totalspent:'90$', latestpurchase:'2023-01-18 /8:44am', news:'X', segment:'Reuser'  },
    { id: 30, customername: 'Sachin Jatav', lastseen: '2023-01-28', orders: '30',totalspent:'100$', latestpurchase:'2023-01-11 /1:34am', news:'X', segment:'Returns'  },
    // Add more data as needed
  ]);
  
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortModel, setSortModel] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'customername', headerName: 'Customer Name', width: 200 },
    { field: 'lastseen', headerName: 'Last Seen', width: 150 },
    { field: 'orders', headerName: 'Orders', width: 150 },
    { field: 'totalspent', headerName: 'Total Spent', width: 150 },
    { field: 'latestpurchase', headerName: 'Latest Purchase', width: 150 },
    { field: 'news', headerName: 'News', width: 150 },
    { field: 'segment', headerName: 'Segment', width: 150 },
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = data.filter(
      (item) =>
        item.id.toString().includes(searchTerm) ||
        item.customername.toLowerCase().includes(searchTerm) ||
        item.lastseen.toString().includes(searchTerm) ||
        item.orders.toLowerCase().includes(searchTerm) ||
        item.totalspent.toLowerCase().includes(searchTerm) ||
        item.latestpurchase.toLowerCase().includes(searchTerm) ||
        item.news.toLowerCase().includes(searchTerm) ||
        item.segment.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filtered);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <label style={{alignItems:"center", marginTop:"10px", fontSize:'20px'}}>Search for customers</label>
      <TextField
        style={{width:"200px ", borderRadius:"18px"}}
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
};

export default DataTable;
