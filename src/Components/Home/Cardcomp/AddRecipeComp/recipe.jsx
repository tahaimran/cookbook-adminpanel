import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./recipe.css";
import SideBar from "../../../SideBar/sidebar";
import { Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Configuration/firebase";
import { uid } from "uid";

function Recipe() {
  // Ingredients Adding

  const [ing, setIng] = useState([]);
  const [quan, setQuan] = useState([]);
  const [recName, setRecName] = useState("");
  const [category, setCategory] = useState("");
  const [making, setMaking] = useState("");
  const [link, setLink] = useState("");
  const [imgLink, setImgLink] = useState("");

  
const recId = uid();

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

  const HandleLink = (event) => {
    setLink(event.target.value);
  };

  const recCollectionRef = collection(db, "categories");
  const createRecipe = async () => {
    await addDoc(recCollectionRef, {
      RecipeName: recName,
      Category: category,
      Making: making,
      Ingredient: ing,
      Quantity: quan,
      VideoLink: link,
      ImageLink: imgLink,
      id: recId
    });
    alert("Data Has Been Added");
    setRecName("");
    setCategory("");
    setMaking("");
    setIng([]);
    setQuan([]);
    setLink("");
    setImgLink("")
  };



  return (
    <> 
  
   
      <SideBar />
       
      <Paper className="mainBox">
        <h2 variant="h2">Add New Recipe</h2>
        <Box>
          <TextField
            required
            size="small"
            id="outlined-basic"
            label="Recipe Name"
            variant="outlined"
            value={recName}
            onChange={(e) => setRecName(e.target.value)}
          />
        </Box>
        <Box>
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
        </Box>

        <Box>
          <Button
            color="success"
            variant="contained" size="medium"
            onClick={() => addIng()}
          >
            Add Ingredients
          </Button>
          <br />
          <div className="ing-container">
            {ing.map((data, i) => {
              const { Ingredient, Quantity } = data;

              return (
                <Box sx={{ marginBottom: "10px" }}>
                  <TextField
                    required
                    size="small"
                    id={i}
                    value={Ingredient}
                    label="Enter Ingredients"
                    variant="outlined"
                    onChange={(e) => handleIngChange(e, i)}
                  />

                  <TextField
                    sx={{ marginLeft: "10px" }}
                    required
                    id={i}
                    size="small"
                    value={Quantity}
                    label="Quantity"
                    variant="outlined"
                    onChange={(e) => handleQuanChange(e, i)}
                  />

                  <Button 
                    variant="contained"
                     size="medium"
                    label="Quantity"
                    color="success"
                    onClick={() => handleIngDelete(i)}
                  >
                    X
                  </Button>
                  <br />
                </Box>
              );
            })}
          </div>
        </Box>

        <Box>
          <TextField
            sx={{ width: "500px" }}
            required
            id="outlined-multiline-static"
            label="Enter The Making"
            size="small"
            multiline
            value={making}
            rows={6}
            onChange={(e) => setMaking(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            required
            value={link}
            label="Enter reference Link"
            variant="outlined"
            size="small"
            onChange={HandleLink}
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <TextField
           size="small"
            required
            value={imgLink}
            label="Enter Image Link"
            variant="outlined"
            onChange={e => setImgLink(e.target.value)}
            sx={{ width: "400px" }}
          />
        </Box>

         <div className="button_container">
           <button
            onClick={createRecipe}
       
            >
            Submit
          </button>
            </div>
        
      </Paper>
      
    </>
  );
}

export default Recipe;
