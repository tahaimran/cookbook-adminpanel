import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from '../Components/Home/home'
import Login from '../Components/Login/Login';
function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/home' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default AppRouter