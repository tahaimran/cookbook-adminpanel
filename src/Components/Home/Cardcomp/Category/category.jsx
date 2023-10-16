import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/sidebar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../Configuration/firebase";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./category.css";
import SwitchTab from "../../../SwitchTab/SwitchTab";
import ConfirmationDialog from "../../../ConfirmationDialog/ConfirmationDialog";
function Category() {
  const [recipe, setRecipe] = useState([]);

  const [filterCat, setfilterCat] = useState("Break Fast");
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const recCollectionRef = collection(db, "categories");
  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recCollectionRef);

      setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, [recCollectionRef]);
  const onTabChange = (tab) => {
    setfilterCat(
      tab === "BreakFast"
        ? "Break Fast"
        : tab === "FastFood"
        ? "Fast Food"
        : tab
    );
  };
  const handleConfirm = () => {
    // Perform the action you want to confirm here
    console.log('Action confirmed');
    setConfirmationOpen(false);
  };
  const handleDeleteRecipe = async (deleteRecipeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirmDelete) {
      try {
        const recipeDocRef = doc(db, "categories", deleteRecipeId);

        await deleteDoc(recipeDocRef);

        setRecipe((prevRecipe) =>
          prevRecipe.filter((rec) => rec.id !== deleteRecipeId)
        );
      } catch (error) {
        console.error("Error deleting recipe: ", error);
      }
    }
  };
  return (
    <div>
      <SideBar />
      <SwitchTab
        className="SwitchTab"
        data={[
          "BreakFast",
          "Lunch",
          "Appetizer",
          "Dinner",
          "Dessert",
          "Baking",
          "FastFood",
        ]}
        onTabChange={onTabChange}
      />
      <div>
        <Box className="recCat">
          <Box>
            {recipe
              .filter((rec) => rec.Category === `${filterCat}`)
              .map((rec, i) => {
                return (
                  <div>
                    <div className="RecipeName">
                      <div className="RecipeNameTag">
                        <h2 className="RecipeName_number">{i}</h2>
                        <h2 className="RecipeName_name">{rec.RecipeName}</h2>
                      </div>

                      <div>
                      
                        <div>
                          <button onClick={() => setConfirmationOpen(true)}
                          className="delete-button"
                          >
                            Delete
                          </button>
                          <ConfirmationDialog
                            isOpen={isConfirmationOpen}
                            onClose={() => setConfirmationOpen(false)}
                            onConfirm={handleConfirm}
                            message="Are you sure you want to perform this action?"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="main">
                      <ol className="main_list">
                        {rec.Ingredient.map((recs, i) => {
                          return <li>{recs}</li>;
                        })}
                      </ol>
                      <ol className="main_list">
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
                            <span className="text" variant="p">
                              {rec.Making}
                            </span>
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



// onClick={() => handleDeleteRecipe(rec.id)}