import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/sidebar";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../Configuration/firebase";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./category.css";
function Category() {
  const [recipe, setRecipe] = useState([]);
  const recCollectionRef = collection(db, "categories");
  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recCollectionRef);
      setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, []);

  return (
    <div>
      <SideBar />
      <Box className="recCat">
        <Typography variant="h4">Break Fast</Typography>
        <Box  sx={{ height: "500px" }}>
          {recipe
            .filter((rec) => rec.Category === "Break Fast")
            .map((rec, i) => {
              return (
                <div >
                  <div className="RecipeName" >
                    <h2 className="RecipeName_number" >{i}</h2>
                    <h2 className="RecipeName_name">{rec.RecipeName}</h2>
                  </div>

                  <div
                    className="main"
                  
                  >
                    <ol className="main_list" >
                      {rec.Ingredient.map((recs, i) => {
                        return <li>{recs}</li>;
                      })}
                    </ol>
                    <ol className="main_list"  >
                      {rec.Quantity.map((recs, i) => {
                        return <li>{recs}</li>;
                      })}
                    </ol>

                    <div className="Box_2">
                      <div className="Box_div_one"> 
                        <Box
                          sx={{
                            width: "150px",
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <span className="text" variant="p">{rec.Making}</span>
                        </Box>
                        <Link to={rec.VideoLink}>
                        <Button className="button_9">watch video </Button>
                      </Link>
                      
                      </div>
                      <div>
                      <Box>
                          <img
                            className="Box_img"
                            src={rec.ImageLink}
                            alt=""
                            srcset=""
                          />
                        </Box>
                     
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Box>
      </Box>
      {/* <Box className="recCat">
        <Typography variant="h2">Lunch</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Lunch")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box>
      <Box className="recCat">
        <Typography variant="h2">Appetizer</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Appetizer")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box>
      <Box className="recCat">
        <Typography variant="h2">Dinner</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Dinner")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box>
      <Box className="recCat">
        <Typography variant="h2">Dessert</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Dessert")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box>

      <Box className="recCat">
        <Typography variant="h2">Baking</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Baking")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box>

      <Box className="recCat">
        <Typography variant="h2">Fast Food</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "Fast Food")
            .map((rec, i) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{i}</Typography>
                  <Typography variant="h4">{rec.RecipeName}</Typography>
                  <ol>
                    {rec.Ingredient.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <ol>
                    {rec.Quantity.map((recs, i) => {
                      return <li>{recs}</li>;
                    })}
                  </ol>
                  <Box
                    sx={{ width: "150px", height: "100px", overflow: "hidden" }}
                  >
                    <Typography variant="p">{rec.Making}</Typography>
                  </Box>
                  <Box sx={{ width: "150px" }}>
                    <img width="100%" src={rec.ImageLink} alt="" srcset="" />
                  </Box>
                  <Link target="_blank" to={rec.VideoLink}>
                    <Button variant="outlined">Video Ref</Button>
                  </Link>
                </Paper>
              );
            })}
        </Box>
      </Box> */}
    </div>
  );
}

export default Category;
