import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../AddRecipeComp/recipe.css";
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
        <Typography variant="h2"> Add New Recipe</Typography>
        <Box>
          <TextField
            required
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
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="break fast">Break fast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="appetizer">Appetizer</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="dessert">Dessert</MenuItem>
              <MenuItem value="baking">Baking</MenuItem>
              <MenuItem value="fast food">Fast food</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{ marginBottom: "10px" }}
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
                    value={Quantity}
                    label="Quantity"
                    variant="outlined"
                    onChange={(e) => handleQuanChange(e, i)}
                  />

                  <Button
                    variant="contained"
                    sx={{ marginLeft: "10px", marginTop: "10px" }}
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
            onChange={HandleLink}
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <TextField
            required
            value={imgLink}
            label="Enter Image Link"
            variant="outlined"
            onChange={e => setImgLink(e.target.value)}
            sx={{ width: "400px" }}
          />
        </Box>

        <Box>
          <Button
            onClick={createRecipe}
            sx={{ width: "180px", height: "50px" }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Recipe;
