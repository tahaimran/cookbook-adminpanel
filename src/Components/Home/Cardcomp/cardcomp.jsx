import React from "react";
import { Paper, Button ,Typography} from "@mui/material";
import "./cardcomp.css";
import suggestionImg from '../../../Images/suggestionImg.jpg'
import { recipe } from "./AddRecipeComp/recipe";
import { Link, useNavigate } from "react-router-dom";

function Cardcomp() {

  let history = useNavigate();

  const RecipCall = () => {
    history("/addRecipe");
  }

  return (
    <div className="cardCompMain">
      <Paper elevation={24} className="main-paper">
        <img
          src="https://img.freepik.com/premium-photo/healthy-food-background-autumn-fresh-vegetables-dark-stone-table-with-copy-space-top-view_127032-1954.jpg"
          alt=""
        />
        <div className="bottom-paper ">
            <Typography variant="h4">Add New Reciepe</Typography>
          <Button  size="medium" variant="contained" onClick={RecipCall}>Add</Button>
        </div>
      </Paper>
      <Paper elevation={24} className="main-paper">
        <img
          src="https://cdn.shopify.com/s/files/1/1933/6413/articles/blog-banner-fruit-opt1_1024x1024.jpg?v=1656577733"
          alt=""
        />
        <div className="bottom-paper">
            <Typography variant="h4">Categories</Typography>
          <Link to='/category'><Button  size="medium" variant="contained">View All</Button></Link>
        </div>
      </Paper>
      <Paper elevation={24} className="main-paper">
        <img
          src={suggestionImg}
          alt=""
        />
        <div className="bottom-paper">
            <Typography variant="h4">Suggestions</Typography>
         <Link to="/submit"><Button  size="medium" variant="contained">Submit</Button></Link> 
        </div>
      </Paper>
    </div>
  );
}

export default Cardcomp;
