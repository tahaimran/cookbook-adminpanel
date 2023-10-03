// import { Category, Home, Login } from '@mui/icons-material'
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../Components/Home/home';
import Login from '../Components/Login/Login';
import  Recipe from '../Components/Home/Cardcomp/AddRecipeComp/recipe';
import Category from '../Components/Home/Cardcomp/Category/category';
import Submit from '../Components/Home/Cardcomp/Submit/Submit';




function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/addRecipe' element={<Recipe/>}/>
            <Route path='/submit' element={<Submit/>}/>
            <Route path='/category' element={<Category/>}/>

        </Routes>
    </Router>
  )
}

export default AppRouter