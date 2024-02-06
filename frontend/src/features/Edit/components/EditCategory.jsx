import { TextField,Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link, json, useNavigate, useParams } from 'react-router-dom'


const EditCategory = () => {

const navigate= useNavigate()
const {id}=useParams()



const [status,setStatus]=useState('')
const [description,setDescription]=useState('')
const [category,setCategory]=useState('')
  
  



const singledata = async()=>{
  try {
    const res = await fetch(`http://localhost:4000/category/${id}`)
    const data = await res.json()
    setCategory(data.category)
    setStatus(data.status)
    setDescription(data.description)
    
    
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
  
      const response = await fetch(`http://localhost:4000/category/${id}`,{
        method:'PUT',headers:{"Content-Type": "application/json"}, body:JSON.stringify({description,status,category})
       

      })
  
      if(response.ok){
        navigate('/category')
      }
  
  
    } catch (error) {
      console.log(error)
    }
    
  }

  

  const deletecategory = async(e)=>{
    e.preventDefault()
    try {
      await fetch(`http://localhost:4000/category/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
        
      })
      navigate('/category')
      console.log(id)
      
    } catch (error) {
      console.log(error)
    }
  
   
    


    
  }
  
  
  return (
    <>
    <div className='add-head'>
<Link to={'/category'}><span> <IoArrowBackOutline /> Edit Category </span></Link>
    </div>








     
    <form onSubmit={updateproduct}>
    
    <div className='product-fields' >
     
       
       <Box  sx={{ display: 'flex', flexWrap: 'wrap' }}>
      
         <div>
         <TextField
           label="Category Name"
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           color={'secondary'}
           onChange={(e)=>setCategory(e.target.value)}
           value={category}
         />
         </div>
         <div>
         <TextField
           label="Pack Size"
           color={'secondary'}
           id="outlined-start-adornment"
           sx={{ ml: 3,mb:4, width: '35ch' }}
           onChange={(e)=>setDescription(e.target.value)}
           value={description}
         />
         </div>
         <div>
         <div>
       <FormControl  sx={{ ml: 3,mb:4, width: '35ch' }} 
       color={'secondary'}   >
       
  <InputLabel  id="demo-simple-select-label">Status</InputLabel>
  
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   
    label="Category"
    onChange={(e)=>setStatus(e.target.value)}
    value={status}
    
  >
    <MenuItem value={'Inactive'}>Inactive</MenuItem>
    <MenuItem value={'Active'}>Active</MenuItem>
    
  </Select>
</FormControl>
         </div>
         </div>
     </Box>
 
     </div>
     <div className='end-btns'>
      <Link to={'/category'}> <button id='btn-cancel' onClick={deletecategory}>Delete</button></Link>
       <button type='submit' id='btn-save'>Save</button>
      
     </div>
     </form>
        
        </>
  )
}

export default EditCategory