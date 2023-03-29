import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from '../Components/Home/home'
import Login from '../Components/Login/Login';
import { recipe as Recipe } from '../Components/Home/Cardcomp/AddRecipeComp/recipe';
import Submit from '../Components/Home/Submit/submit';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/home' element={<Home />} />
            <Route path='/addRecipe' element={<Recipe/>}/>
            <Route path='/submit' element={<Submit/>}/>

        </Routes>
    </Router>
  )
}

export default AppRouter