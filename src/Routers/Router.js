// import { Category, Home, Login } from '@mui/icons-material'
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import Login from '../pages/Login/Login';
import Category from '../pages/Categories/category';
import Submit from '../pages/Suggestions/Submit';
import Recipe from '../pages/AddRecipe/recipe';
import EditRecipe from '../Layout/EditRecipe/EditRecipe';
import Tickets from '../pages/Tickets/tickets';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addRecipe" element={<Recipe />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/category" element={<Category />} />
        <Route path="/tickets" element={<Tickets/>} />

        <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default AppRouter