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
    <Box sx={{ flexGrow: 1 }} className="sideBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" className="sideText">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/addRecipe" className="sideText">
              Add New Recipe
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/category">Categories</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/submit" className="sideText">
              Suggestions
            </Link>
          </Typography>

          <Link to="/" className="btnLogin">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
