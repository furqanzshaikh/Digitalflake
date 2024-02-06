import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/forgot.css'



const Forgot = () => {
  const [email,setEmail]=useState('')
  const navigate= useNavigate()

  const Handler = (e)=>{
    e.preventDefault()
    try {
      console.log(email)
      setEmail('')
      alert('Email sent')
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className='f-container'>


      <div className='f-card'>
        <div>
        <h4>Did you forget your password?</h4>
        <p>Enter your email address and we'll send you a link to restore password</p>
        </div>

    <form onSubmit={Handler} >
   
        <div className='bottom'>
      <span>Email Address</span>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} />
          <button type='submit'>Request reset link</button>
          <Link to={'/'}><p>Back to login</p></Link>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Forgot