import React, { useState } from 'react'
import bgimg from '../assets/loginbg.png'
import  '../styles/login.css';
import TextField from '@mui/material/TextField';
import logo from '../assets/HomeImg.png'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




import Box from '@mui/material/Box';

import { Link, useNavigate } from 'react-router-dom'
import img from '../assets/Group.png'
import { InputAdornment } from '@mui/material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const navigate= useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const handleLogin = (e)=>{
    e.preventDefault()
    try {
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

  return (
<div >

<img src={bgimg} alt="bgimg" className='bg' />

  <div className='card'>
    <img src={logo} alt="logo" />
  <p>welcome to digitalflake admin</p>


  <form onSubmit={handleLogin}>
  <div>
  
        <TextField
          label="Email"
          color={'secondary'}
          id="outlined-start-adornment"
          sx={{ m: 2, width: '38ch' ,borderRadius:0}}
          onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
       
        <FormControl sx={{ m: 2, width: '38ch',borderRadius:0 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          
          onChange={(e)=>setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <FaEyeSlash />: <FaEye /> }
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            color={'secondary'}
          />
        </FormControl>
  
      </div>
      <div className='fp'>
    <Link to={'/forgot'}><p >forgot password?</p></Link>

      <button type='submit'>Log In</button>
      
      </div>
      </Box>
      </form>
  </div>

</div>
 
  )
}

export default Login
















