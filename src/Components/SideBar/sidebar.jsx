import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./sidebar.css";
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
