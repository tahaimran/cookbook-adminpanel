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




function Recipe() {

// Ingredients Adding 

  const [ing, setIng] = useState([]);
  const [quan, setQuan] = useState([]);

  const addIng = () => {
    const IngValue = [...ing, []];
    const QuanValue = [...quan, []];

    setIng(IngValue);
    setQuan(QuanValue);
  };

  const handleIngChange = (onChangeValue, i) => {
    const inputData = [...ing];
    inputData[i] = onChangeValue.target.value;
    console.log(inputData);
    setIng(inputData);
  };

  const handleQuanChange = (onChangeValue, i) => {
    const inputData = [...quan];
    inputData[i] = onChangeValue.target.value;
    console.log(inputData);
    setQuan(inputData);
  }

  const handleIngDelete = (i) => {
    const deleteIng = [...ing];
    const deleteQuan = [...quan];

    deleteIng.splice(i, 1);
    deleteQuan.splice(i, 1);

    setIng(deleteIng);
    setQuan(deleteQuan);
  }
  
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
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <Box>
          <FormControl sx={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value=""
              label="Category"
              onChange={(e) => console.log(e.target.value)}
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
          <Button variant="contained" sx={{marginBottom : "10px"}} onClick={() => addIng()}>
            Add Ingredients
          </Button>
          <br />
          <div className="ing-container">
          {ing.map((data, i) => {

            const {Ingredient, Quantity} = data;

            return (
              <Box sx={{marginBottom:"10px"}}>
                <TextField
                  required
                  id={i}
                  value={Ingredient}
                  label="Enter Ingredients"
                  variant="outlined"
                  onChange={(e) => handleIngChange(e, i)}
                />

                <TextField
                  required
                  id={i}
                  value={Quantity}
                  label="Quantity"
                  variant="outlined"
                  onChange={(e) =>  handleQuanChange(e, i)}
                />

                <Button variant="contained" sx={{marginLeft:"10px" , marginTop: "10px" }} onClick={() => handleIngDelete(i)}>
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
            rows={6}
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <Box>
          <Button sx={{ width: "180px", height: "50px" }} variant="contained">
            Submit
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Recipe;
