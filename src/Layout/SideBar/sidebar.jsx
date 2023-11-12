import * as React from "react";

import "./sidebar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBar_1">
          <h1 className="cook_book"> Cook Book Admin Panel</h1>
        </div>
      <div className="sideBar_2">
              
          <span >
            <Link to="/home" className="sideText">
              Home
            </Link>
          </span>
          <span >
            <Link to="/addRecipe" className="sideText">
              Add Recipe
            </Link>
          </span>
          <span >
            <Link to="/category" className="sideText">
              Categories
            </Link>
          </span>
          <span >
            <Link to="/submit" className="sideText">
              Suggestions
            </Link>
          </span>
<<<<<<< HEAD
    
=======

>>>>>>> parent of d9cf8d4 (feat(tickets): :sparkles: Add tickets page from tickets collections)
          <div>
             <Link to="/" className="sideTexts">
            <span>Logout </span> 
          </Link>
       
      </div>
      </div>
      
    </div>
  );
}
