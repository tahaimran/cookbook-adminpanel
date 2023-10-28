import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  doc, getDoc, updateDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { db } from "../../Configuration/firebase";
import SideBar from "../../Layout/SideBar/sidebar";
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
function EditRecipe() {
  const { recipeId } = useParams();
  const history = useNavigate()

  const [ing, setIng] = useState([]);
  const [quan, setQuan] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [recName, setRecName] = useState("");
  const [category, setCategory] = useState("");
  const [making, setMaking] = useState("");
  const [link, setLink] = useState("");
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeDocRef = doc(db, "categories", recipeId);
      const recipeDoc = await getDoc(recipeDocRef);
      if (recipeDoc.exists()) {
        const recipeData = recipeDoc.data();
        setRecipe(recipeData);
        setRecName(recipeData.RecipeName);
        setCategory(recipeData.Category);
        setMaking(recipeData.Making);
        setLink(recipeData.VideoLink);
        setImgLink(recipeData.ImageLink);
        setIng(recipeData.Ingredient);
        setQuan(recipeData.Quantity);
      } else {
        // Handle the case when the recipe doesn't exist or show a message to the user
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const updateRecipe = async () => {
    const recipeDocRef = doc(db, "categories", recipeId);
    await updateDoc(recipeDocRef, {
      RecipeName: recName,
      Category: category,
      Making: making,
      VideoLink: link,
      ImageLink: imgLink,
    });
   alert("Recipe has been updated");
   
    history("/category");
    

    // You may want to redirect back to the recipe list or view page
  };
  const addIng = () => {
    const IngValue = [...ing, []];
    const QuanValue = [...quan, []];

    setIng(IngValue);
    setQuan(QuanValue);
  };

  const handleIngChange = (onChangeValue, i) => {
    const inputData = [...ing];
    inputData[i] = onChangeValue.target.value;
    setIng(inputData);
  };

  const handleQuanChange = (onChangeValue, i) => {
    const inputData = [...quan];
    inputData[i] = onChangeValue.target.value;
    setQuan(inputData);
  };

  const handleIngDelete = (i) => {
    const deleteIng = [...ing];
    const deleteQuan = [...quan];

    deleteIng.splice(i, 1);
    deleteQuan.splice(i, 1);

    setIng(deleteIng);
    setQuan(deleteQuan);
  };
  return (
    <>
      <SideBar />
      <div className="maindiv">
        <h2 className="h2">Edit Recipe</h2>
        {recipe && (
          <div>
            <TextField
              required
              size="small"
              id="outlined-basic"
              label="Recipe Name"
              variant="outlined"
              value={recName}
              onChange={(e) => setRecName(e.target.value)}
            />
            <FormControl sx={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>

              <Select
                size="small"
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Break Fast">Break fast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Appetizer">Appetizer</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Baking">Baking</MenuItem>
                <MenuItem value="Fast Food">Fast food</MenuItem>
              </Select>
              </FormControl>
           <div>   
              <button 
             className="Add_Ingredients"
            onClick={() => addIng()}
          >
            Add Ingredients
          </button>
          <br />
          <div className="edit_container">
          {ing.map((data, i) => {

                  return (
                    <div key={i}>

                      <TextField
                      sx={{ marginTop: "15px" }}
                      required
                        size="small"
                        id={i}
                        value={ing[i]}
                        label="Enter Ingredients"
                        variant="outlined"
                        onChange={(e) => handleIngChange(e, i)}
                      />

                      <TextField
                      
                        sx={{ marginLeft: "10px",marginTop: "15px" }}
                        required
                        id={i}
                        size="small"
                        value={quan[i]}
                        label="Quantity"
                        variant="outlined"
                        onChange={(e) => handleQuanChange(e, i)}
                      />

                      <Button
                        sx={{ marginLeft: "10px" , marginTop: "15px"}}
                        variant="contained"
                        size="medium"
                        onClick={() => handleIngDelete(i)}
                      >
                     <AiOutlineDelete/>
                      </Button>
                    </div>
                  );
                })}
          </div>
        </div>
           
            <TextField
              sx={{ width: "400px"  ,marginTop: "20px"}}
              required
              id="outlined-multiline-static"
              label="Enter The Making"
              size="small"
              multiline
              value={making}
              rows={6}
              onChange={(e) => setMaking(e.target.value)}
            />
            <TextField
              required
             
              value={link}
              label="Enter reference Link"
              variant="outlined"
              size="small"
              onChange={(e) => setLink(e.target.value)}
              sx={{ width: "300px" , marginTop: "20px"}}
            />
            <TextField
              size="small"
              required
              value={imgLink}
              label="Enter Image Link"
              variant="outlined"
              onChange={(e) => setImgLink(e.target.value)}
              sx={{ width: "400px", marginTop: "20px" }}
            />
            <div className="button_container">
              <button onClick={updateRecipe}>Update</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EditRecipe;
