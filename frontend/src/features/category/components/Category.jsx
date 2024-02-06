import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../styles/category.css'
import { TbCaretUpDownFilled, TbCategory } from "react-icons/tb";
import { TiEdit } from 'react-icons/ti';


const Category = () => {

const navigate= useNavigate()
  const [data,setData]=useState([])
  const baseURL = 'http://localhost:4000/category'
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${baseURL}`)
        
        if (!response.ok) {
          throw new Error('Error while Fetching data')
        }
  
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
        console.log(data)
    
  
  
  
      } catch (error) {
        console.log(error)
       
     
      }
    }
    fetchData()
  }, [])



  const EditData = async () => {
    const {id}=useParams()
    const [data,setData]=useState('')
     try {
   
       const response = await fetch(`http://localhost:4000/category/${id}`)
       console.log(id)
   
       if (!response.ok) {
         throw new Error('Error while Fetching data')
       }
   
       const jsonData = await response.json();
       console.log('edit')
       setData(jsonData);
       console.log(jsonData)
    
       
   
   
     } catch (error) {
       console.log(error)
      
    
     }
   }
   


  return (
    <>
    <div className='category-head'>

    <div className='icon'>
        <div className='elements'>
        <TbCategory/>
        <span>
        Category
        </span></div>
        <input type="text" className="form-control" id='search-product'  placeholder="Search"  aria-describedby="addon-wrapping" />
        <div>
      <Link to={'/add/category'}><button type="button" className="btn custom-btn" id='add-btn' >Add new</button></Link>
      </div>
      </div>  

    </div>







<table className="table" id='table'>
    <thead>
      <tr className='table-header'>
        <th scope="col">ID <TbCaretUpDownFilled /> </th>
        <th scope="col">Name <TbCaretUpDownFilled /></th>
        <th scope="col">Description<TbCaretUpDownFilled /></th>
        <th scope="col">Status<TbCaretUpDownFilled /></th>
      </tr>
    </thead>
    <tbody>

      {data.map((i)=>{
        return(
          <>
          <tr id='c-bg'>
          <th scope="row">{i._id[0]}</th>
          <td>{i.category}</td>
          <td>{i.description}</td>
          <td><div className='action-btn-c'>{i.status}<Link to={`/category/edit/${i._id}`}><TiEdit/></Link></div></td>
        </tr>
       
        </>
        )
      })}
     
    </tbody>
  </table>
  </>
)}

export default Category