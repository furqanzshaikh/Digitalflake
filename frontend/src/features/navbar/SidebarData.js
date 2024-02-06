import React from 'react';
import { TbCategory } from "react-icons/tb";
import { BiPackage } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <GrHomeRounded />,
    cName: 'nav-text'
  },
  {
    title: 'Category',
    path: '/category',
    icon: <TbCategory  />
    ,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <BiPackage  />,
    cName: 'nav-text'
  },
  
];