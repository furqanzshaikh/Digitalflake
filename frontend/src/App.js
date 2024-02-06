import React, { useState } from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Navbar from './features/navbar/components/Navbar.jsx'
import Home from './features/home/components/Home'
import Products from './features/products/components/Products.jsx'
import Category from './features/category/components/Category.jsx'
import AddCategory from './features/category/components/AddCategory.jsx'
import AddProduct from './features/products/components/AddProduct.jsx'
import Login from './features/login/components/Login.jsx'
import Forgot from './features/forgot/components/Forgot.jsx'
import EditProduct from './features/Edit/components/EditProduct.jsx'
import EditCategory from './features/Edit/components/EditCategory.jsx'


const App = () => {
  const [drawerWidth, setDrawerWidth] = useState(0); 

  const handleDrawerResize = (newWidth) => {
    setDrawerWidth(newWidth);
  };

  return (
    <>
      <Router>
        <div
          style={{
            transition: 'margin-left 0.3s',
            marginLeft: `${drawerWidth}px`, 
          }}
        >
          <Navbar onDrawerResize={handleDrawerResize} />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/category' element={<Category />} />
            <Route path='/add/category' element={<AddCategory />} />
            <Route path='/add/product' element={<AddProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/product/edit/:id' element={<EditProduct/>} />
            <Route path='/category/edit/:id' element={<EditCategory/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App