import React, { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import logo from '../assets/Group.png';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import { IconContext } from 'react-icons';
import { HiOutlineUserCircle } from "react-icons/hi2";
import '../styles/navbar.css'
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = ({ onDrawerResize }) => {
  const handleDrawerToggle = () => {
    if(sidebar){
      onDrawerResize(0)
    }    
        else{
      onDrawerResize(250)
    }
  };

  const handleResize = (newWidth) => {
    onDrawerResize(newWidth);
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {setSidebar(!sidebar)
    
    
  };

  return (
    <>
      <IconContext.Provider  value={{ color: '#0000' }} >
        
        <div className={`navbar`} >
          <Link to='#' className='menu-bars' onClick={handleDrawerToggle}>
            <div className='logo' onClick={showSidebar}>
              <img src={logo} alt='logo' />
            </div>
          </Link>
          <div id='user'>
            <HiOutlineUserCircle  />
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={handleDrawerToggle}>
        
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={handleDrawerToggle}>
                <AiIcons.AiOutlineClose  />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path} onClick={handleDrawerToggle}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            <Link to={'/'} onClick={handleDrawerToggle} ><button className='login-btn'>Login</button></Link>
          </ul>
          
        </nav>

        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
