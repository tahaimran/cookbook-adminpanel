import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/sidebar";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../Configuration/firebase";

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
      <div>
        {recipe.map((rec) => {
          return (
            <div>
              <h1>{rec.RecipeName}</h1>
              <h2>{rec.Category}</h2>
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
              <p>{rec.Making}</p>
              <img src={rec.ImageLink} alt="" srcset="" />
              {/* <button target="blank" src={rec.VideoLink}>Video Ref</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
