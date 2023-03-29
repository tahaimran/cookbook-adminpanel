import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../AddRecipeComp/recipe.css";
import SideBar from "../../../SideBar/sidebar";
import { Button, Paper, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const recipe = () => {
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
          <FormControl sx={{width : "300px"}}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
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
          <Button sx={{width : "180px",height : "50px"}} variant="contained">Submit</Button>
        </Box>
      </Paper>
    </>
  );
};
