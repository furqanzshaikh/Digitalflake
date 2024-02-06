import React from 'react'
import '../styles/home.css'
import homeimg from '../assets/HomeImg.png'
import {useNavigate} from 'react-router-dom'
const Home = () => {
const navigate = useNavigate('/')

const handleLogOut = (e) =>{
 try {
    e.preventDefault()
    const confirmLogout = window.confirm("Are you sure you want to Log out ?");
        
   
    if (confirmLogout) {
  
      
      navigate('/')
     
        console.log("Logged out successfully");
    } else {
        console.log("Log out canceled.");
    }
 } catch (error) {
    console.log(error)
    
 }
}

  return (
  <>
  
  <div id='logout'>
  <button  onClick={handleLogOut}>Log out</button>
  </div>
    <div className='home-container' >
    
      
      <div className='home'>
      <img src={homeimg} alt="homeimg" />
      <p>Welcome to Digitalflake Admin</p>
      </div>
      

    </div>
         
            </>
  )
}

export default Home