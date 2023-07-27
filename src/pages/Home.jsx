import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { DataGrid} from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Users from '../components/Users';
import Departments from '../components/Departments';

const Home = () => {
    let navigate = useNavigate()


    useEffect(()=>{

        let data = localStorage.getItem("user")
            data= JSON.parse(data)
        if(!data.name || !data.email || !data.phone){
            navigate("/",{state:"please provide all the details first"})
        }else{
            console.log("ok bhai")
        }
        
    },[])

  return (
    <div>

      <Users />

      <Box marginY={4} >
      <Departments />
      </Box>
    </div>
  )
}

export default Home