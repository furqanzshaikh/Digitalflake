import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import '../styles/category.css'
import { Link, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const AddCategory = () => {
  
const navigate= useNavigate()

const [category,setCategory]=useState('')
const [description,setDescription]=useState('')
  const [status,setStatus]=useState('')
  











  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(category,description,status)
    try {
     await fetch('http://localhost:4000/category', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              
              },
              body: JSON.stringify({category,description,status})
            
            } )
        
            navigate('/category')
  
    } catch (error) {
        console.log(error)
    }
  }



  
  


  return (
  <>
    <div className='add-c-head'>
<Link to={'/category'}><span><IoArrowBackOutline /> Add Category </span></Link>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='fields' >
       
      <Box  sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
        value={category}
          label="Category Name"
          id="outlined-start-adornment"
          sx={{ ml: 6,mb:5 ,width: '35ch' }}
          color={'secondary'}
          onChange={(e)=>setCategory(e.target.value)}
          
        />
        </div>
      
        <div>
        <TextField
        value={description}
          label="Description"
          id="outlined-start-adornment"
          sx={{ ml: 6, width: '35ch' }}
          color={'secondary'}
          onChange={(e)=>setDescription(e.target.value)}
          
        />
        </div>
 
        <div >
      <FormControl  sx={{ ml: 6,mb:4, width: '35ch' }} 
       color={'secondary'}  >
  <InputLabel  id="demo-simple-select-label">Status</InputLabel>
  
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={status}
    label="Status"
    onChange={(e)=>setStatus(e.target.value)}
    
  >
    <MenuItem value={'Active'}>Active</MenuItem>
    <MenuItem value={'Inactive'}>Inactive</MenuItem>
    
  </Select>
</FormControl>
  

        </div>

       


       
   
    </Box>
 
    </div>
    <div className='end-btns'>
      <Link to={'/category'}><button id='btn-cancel' >Cancel</button></Link>
      <button id='btn-save' type='submit'>Save</button>
    </div>
    </form>
    </>
  )
}

export default AddCategory