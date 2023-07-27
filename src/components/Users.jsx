import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { DataGrid} from '@mui/x-data-grid';
import { Box } from '@mui/material';

const Users = () => {
    //let navigate = useNavigate()

    const [users,setUsers]=useState([])

    const rows = [
        {userId: 1, col1: 'User Id', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'userId', headerName: 'User Id', width: 150 },
        { field: 'id', id: 'Id', width: 150 },
        { field: 'title', title: 'Title', width: 200 },
        { field: 'body', body: 'Body', width: 500 },
      ];

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            data=>{
                setUsers(data.data)
                console.log(users)
            }
        ).catch(e=>console.log(e))
    },[])
    



  return (

<Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default Users