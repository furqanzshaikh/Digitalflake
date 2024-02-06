import { TextField,Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link, useNavigate, useParams } from 'react-router-dom'


const Edit = () => {

  const navigate= useNavigate()
const {id}=useParams()


const [name,setName]=useState('')
const [packsize,setPacksize]=useState('')
const [mrp,setMrp]=useState('')
const [status,setStatus]=useState('')
const [image,setImage]=useState('')
const [category,setCategory]=useState('')

  



const singledata = async()=>{
  try {
    const res = await fetch(`http://localhost:4000/${id}`)
    const data = await res.json()
    setCategory(data.category)
    setImage(data.image)
    setPacksize(data.packsize)
    setMrp(data.mrp)
    setName(data.name)
    setStatus(data.status)
    
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  singledata()
}, [])


  const updateproduct = async (e)=>{
    e.preventDefault()
 
 
    
    
  
    try {
  
      const response = await fetch(`http://localhost:4000/${id}`,{
        method:'PUT',headers:{"Content-Type":"application/json"},
       body:JSON.stringify({category,mrp,packsize,status,name})

      })
  
      if(response.ok){
        navigate('/products')
      }
  
  
    } catch (error) {
      console.log(error)
    }
    
  }

  const onImageChange =()=>{

  }

  const deleteproduct = async(e)=>{
    e.preventDefault()
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        
      // If user confirms deletion
      if (confirmDelete) {
        await fetch(`http://localhost:4000/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
          
        })
        
        navigate('/products')
        console.log(id)
          console.log("Item deleted successfully!");
      } else {
          console.log("Deletion canceled.");
      }

      
    } catch (error) {
      console.log(error)
    }
  
   
    


    
  }
  
  
  return (
    <>
    <div className='add-head'>
<Link to={'/products'}><span> <IoArrowBackOutline /> Edit Product </span></Link>
    </div>








     
    <form onSubmit={updateproduct}>
    
    <div className='product-fields' >
     
       
       <Box  sx={{ display: 'flex', flexWrap: 'wrap' }}>
       <div>
       <FormControl  sx={{ ml: 3,mb:4, width: '35ch' }} 
       color={'secondary'}   >
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
           value={packsize}
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
         <TextField
           label="Image"
           color={'secondary'}
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           onChange={(e)=>setImage(e.target.value)}
           value={image}
         />
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
      <Link to={'/products'}> <button id='btn-cancel' onClick={deleteproduct}>Delete</button></Link>
       <button type='submit' id='btn-save'>Save</button>
      
     </div>
     </form>
        
        </>
  )
}

export default Edit