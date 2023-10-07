import * as React from "react";

import "./sidebar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBar_1">
          <span className="sideText"> Cook Book Admin Panel</span>
        </div>
      <div className="sideBar_2">
              
          <span >
            <Link to="/home" className="sideText">
              Home
            </Link>
          </span>
          <span >
            <Link to="/addRecipe" className="sideText">
              Add New Recipe
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

         
      </div>
      <div>
      <Link to="/" className="sideTexts">
            <span>Logout </span> 
          </Link>
       
      </div>
    </div>
  );
}
