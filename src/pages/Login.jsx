import { Alert, Box, Button, Container, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()

    const [msg,setMsg] = useState(useLocation().state)

   

    useEffect(()=>{
        localStorage.removeItem("user")
    },[])

    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:""
    })


    const nextPage=()=>{
        
        console.log(user)
        localStorage.setItem("user",JSON.stringify(user))
        navigate("/home")
    }



  return (

    <Container maxWidth="sm">
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {
            (msg) &&(<Alert severity="error">{msg}</Alert>)
            
        }
        {
            
        }


        <form>
        <Stack>
        <TextField onChange={(event)=>{setUser({...user,'name':event.target.value})}} id="name" label="Name" value={user.name} variant="standard" />
        <TextField onChange={(event)=>{setUser({...user,'email':event.target.value})}} id="email" label="Email" value={user.email} type='email' variant="standard" />
        <TextField onChange={(event)=>{setUser({...user,'phone':event.target.value})}} id="phone" label="Phone Number" value={user.phone} type='number' variant="standard" />
        <Button onClick={()=>nextPage()}  type="button"  >Next</Button>
        </Stack>
        </form>
        </Box>
    </Container>
  )
}

export default Login