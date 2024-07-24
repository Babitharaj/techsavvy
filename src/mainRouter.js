import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Login from './pages/login';

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <Route path="about" element={<About/>} />
        
        <Route path="contact" element={<Contact />} />
        
        <Route path="service" element={<Service/>} />
        <Route path="*" element={<NotFound/>} /> */}
        
      </Routes>
       
    </div>
  )
}

export default MainRouter