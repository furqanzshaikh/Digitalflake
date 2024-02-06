import React, { useEffect, useState } from 'react'
import { TbPackage } from 'react-icons/tb'
import { TbCaretUpDownFilled } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';
import '../styles/product.css'
import productimg from '../assets/download.jpg'
import { TiEdit } from "react-icons/ti";




const Products = () => {
  const [data,setData]=useState([])
  const {id} = useParams()


 

useEffect(() => {
  const fetchData = async () => {
    try {

      const response = await fetch(`http://localhost:4000/`)

      if (!response.ok) {
        throw new Error('Error while Fetching data')
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
   



    } catch (error) {
      console.log(error)
     
   
    }
  }
  fetchData()
}, [])



  









  return (
    <>
    <div className='category-head'>

     
      <div className='icon'>
        <div className='elements'>
        <TbPackage />
        <span>
        Products
        </span></div>
        <input type="text" className="form-control" id='search-product'  placeholder="Search"  aria-describedby="addon-wrapping" />
        <div>
      <Link to={'/add/product'}><button type="button" className="btn custom-btn" id='add-btn'>Add new</button></Link>
      </div>
      </div>  
  

</div>

 
     

    <table className="table" id='table'>
    <thead>
      <tr className='table-header'>
        <th scope="col">
          <span className='table-content'>
          ID <TbCaretUpDownFilled />
          </span>
        </th>
        <th scope="col" >
        <span className='table-content'>Name <TbCaretUpDownFilled /></span>
          </th>
        <th scope="col">
        <span className='table-content'>Pack Size <TbCaretUpDownFilled /></span>
        </th>
        <th scope="col">
        <span className='table-content'>Category <TbCaretUpDownFilled /></span>
          </th>
        <th scope="col">
        <span className='table-content'>MRP <TbCaretUpDownFilled /></span>
          </th>
        <th scope="col">
        <span className='table-content'>Image <TbCaretUpDownFilled /></span>
          </th>
        <th scope="col">
          <span className='table-content'>Status <TbCaretUpDownFilled />
          
          </span>
        </th>
      </tr>
    </thead>
    <tbody>

    <tr id='bg'>
          <th scope="row">4</th>
          <td>Mango</td>
          <td>12 </td>
          <td>Fruits</td>
          <td>500</td>
          <td><img src={productimg} alt="img" /></td>
          <td><div className='action-btn'>Active<Link to={`/product/edit/`}><TiEdit/></Link></div></td>
          
        </tr>
      {data.map((i)=>{
        return(
     <>
     
        <tr id='bg'>
          <th scope="row">{i._id[0]}</th>
          <td>{i.name}</td>
          <td>{i.packsize}</td>
          <td>{i.category}</td>
          <td>{i.mrp}</td>
          <td><img src={i.image} alt="img" /></td>
          <td><div className='action-btn'>{i.status}<Link to={`/product/edit/${i._id}`}><TiEdit/></Link></div></td>
          
        </tr>
        
        </>    
        )
      })}
       
       </tbody>
           </table>
  </>
  )
}

export default Products