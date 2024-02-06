import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';



const AddProduct = () => {

const navigate = useNavigate()
const [id,setId]=useState('')
const [category,setCategory]=useState('')
const [name,setName]=useState('')
const [mrp,setMrp]=useState('')
const [packsize,setPacksize]=useState('')
const [status,setStatus]=useState('')
const [image,setImage]=useState(null)
const [thumbnail,setThumbnail]=useState(null)



const handleSubmit= async (e)=>{
  e.preventDefault()
  try {
   await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            
            },
            body: JSON.stringify({name,category,packsize,status,image,mrp,image})
          
          } )
      
          navigate('/products')
          

  } catch (error) {
      console.log(error)
  }
}

const onImageChange = (e) => {
  if(e.target.files && e.target.files[0]) {
    setImage(URL.createObjectURL(e.target.files[0]));
    setThumbnail(e.target.files[0]);
  }
}

  return (

<>
    <div className='add-head'>
<Link to={'/products'}><span> <IoArrowBackOutline /> Add Product </span></Link>
    </div>








   
    <form onSubmit={handleSubmit}>
    
    <div className='product-fields' >
     
       
       <Box  sx={{ display: 'flex', flexWrap: 'wrap' }}>
       <div>
       <FormControl  sx={{ ml: 3,mb:4, width: '35ch' }} 
       color={'secondary'}  >
  <InputLabel  id="demo-simple-select-label">Category</InputLabel>
  
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Category"
    onChange={(e)=>setCategory(e.target.value)}
    
  >
    <MenuItem value={'Milk'}>Milk</MenuItem>
    <MenuItem value={'Fruits'}>Fruits</MenuItem>
    
  </Select>
</FormControl>
         </div>
         <div>
         <TextField
           label="Product Name"
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           color={'secondary'}
           onChange={(e)=>setName(e.target.value)}
           value={name}
         />
         </div>
         <div>
         <TextField
           label="Pack Size"
           color={'secondary'}
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           onChange={(e)=>setPacksize(e.target.value)}
         />
         </div>
         <div>
         <TextField
           label="MRP"
           color={'secondary'}
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           onChange={(e)=>setMrp(e.target.value)}
           value={mrp}
         />
         </div>
         <div>
         <input type="file" accept="image/*" className='upload-input'/>
         </div>
         <div>
         <FormControl fullWidth sx={{ ml: 3,mb:4, width: '35ch' }}
         color={'secondary'}  >
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
       <button id='btn-cancel'>Cancel</button>
       <button type='submit' id='btn-save'>Save</button>
      
     </div>
     </form>
        
        </>
  )
}

export default AddProduct