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
        <Typography variant="h2">Break Fast</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "break fast")
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
        <Typography variant="h2">Lunch</Typography>
        <Box sx={{ height: "100px" }}>
          {recipe
            .filter((rec) => rec.Category === "lunch")
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
            .filter((rec) => rec.Category === "appetizer")
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
            .filter((rec) => rec.Category === "dinner")
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
            .filter((rec) => rec.Category === "dessert")
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
            .filter((rec) => rec.Category === "baking")
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
            .filter((rec) => rec.Category === "fast food")
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
    </div>
  );
}

export default Category;
