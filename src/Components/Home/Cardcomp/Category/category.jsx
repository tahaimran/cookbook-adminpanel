import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/sidebar";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../Configuration/firebase";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./category.css";
import SwitchTab from "../../../SwitchTab/SwitchTab";
function Category() {
  const [recipe, setRecipe] = useState([]);
  const [Loading, setLoading] = useState(false)
  console.log("🚀 ~ file: category.jsx:12 ~ Category ~ Loading:", Loading)
  const cat = [
    "Break Fast",
    "Lunch",
    "Appetizer",
    "Dinner",
    "Dessert",
    "Baking",
    "Fast Food",
  ];
  const [filterCat, setfilterCat] = useState( "Break Fast")

  const recCollectionRef = collection(db, "categories");
  useEffect(() => {
    
    const getRecipes = async () => {
      const data = await getDocs(recCollectionRef);
      setLoading(true)
      setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, []);
  const onTabChange = (tab) => {
    setfilterCat(tab=== "BreakFast"?  "Break Fast": (tab === "FastFood" ?  "Fast Food":tab ) )
  };


  
  return (
    <div>
      <SideBar />
      <SwitchTab className="SwitchTab" data={["BreakFast", "Lunch", "Appetizer", "Dinner", "Dessert", "Baking", "FastFood"]}  onTabChange={onTabChange}  />
      <div>
        
          <Box className="recCat">
        
          <Box  >
            {recipe
              .filter((rec) => rec.Category === `${filterCat}`)
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
                          <button className="button">Watch Video </button>
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
        
      </div>
     
    </div>
  );
}

export default Category;
