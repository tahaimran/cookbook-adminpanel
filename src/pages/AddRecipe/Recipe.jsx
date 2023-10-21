import TextField from "@mui/material/TextField";
import "./recipe.css";

import { Button } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collection, addDoc } from "firebase/firestore";

import { uid } from "uid";

import { db } from "../../Configuration/firebase";
import SideBar from "../../Layout/SideBar/sidebar";


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
      id: recId,
    });
    alert("Data Has Been Added");
    setRecName("");
    setCategory("");
    setMaking("");
    setIng([]);
    setQuan([]);
    setLink("");
    setImgLink("");
  };

  return (
    <>
      <SideBar />

      <div className="maindiv">
        <h2 className="h2">Add New Recipe</h2>
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
        </div>
        <div>
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
        </div>

        <div>
          <button 
             className="Add_Ingredients"
            onClick={() => addIng()}
          >
            Add Ingredients
          </button>
          <br />
          <div className="ing-container">
            {ing.map((data, i) => {
              const { Ingredient, Quantity } = data;

              return (
                <div sx={{ marginTop: "px" }}>
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
                    sx={{ marginLeft: "0px" }}
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      color="#FAE8D9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 4C2 3.44772 2.44772 3 3 3H4.82843L5.29289 2.53554C5.68342 2.145 6.31658 2.145 6.70711 2.53554L9 4.82843L11.2929 2.53554C11.6834 2.145 12.3166 2.145 12.7071 2.53554L13.1716 3H15C15.5523 3 16 3.44772 16 4V5H4V4ZM15 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H15ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10V15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15V10ZM12 10C12 9.44772 12.4477 9 13 9C13.5523 9 14 9.44772 14 10V15C14 15.5523 13.5523 16 13 16C12.4477 16 12 15.5523 12 15V10Z"
                          fill="black"
                        ></path>{" "}
                      </g>
                    </svg>
                  </Button>
                  <br />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <TextField
            sx={{ width: "400px" }}
            required
            id="outlined-multiline-static"
            label="Enter The Making"
            size="small"
            multiline
            value={making}
            rows={6}
            onChange={(e) => setMaking(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            value={link}
            label="Enter reference Link"
            variant="outlined"
            size="small"
            onChange={HandleLink}
            sx={{ width: "300px" }}
          />
        </div>
        <div>
          <TextField
            size="small"
            required
            value={imgLink}
            label="Enter Image Link"
            variant="outlined"
            onChange={(e) => setImgLink(e.target.value)}
            sx={{ width: "400px" }}
          />
        </div>

        <div className="button_container">
          <button  onClick={createRecipe}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Recipe;
