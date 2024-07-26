import React from 'react'
import {Routes,Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/login';

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
       
    </div>
  )
}

export default MainRouter