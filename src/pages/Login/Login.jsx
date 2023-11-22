import React from "react";
import "./Login.css";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CookBookLogo from "../../assets/CookBookLogo.jpg"
export default function Login() {
  const username = "undefinedtech";
  const password = "1234";

  const [checkusername, setcheckusername] = useState("");
  const [checkpassword, setcheckpassword] = useState("");

  const handleUserChange = (event) => {
    setcheckusername(event.target.value);
  };

  const handlePassChange = (event) => {
    setcheckpassword(event.target.value);
  };

  let history = useNavigate();
  
  const Clicked = () => {
    if (checkusername === username && checkpassword === password) {
      history("/home");
    }else{
        alert("Wrong Attempt");

    }
  };
  return (
    <div className="loginmain">
      <div className="mainDiv">
      <h1 className="Cook_Book">
          Cook Book Admin
          </h1>
        <div className="av-div">
         
          <img
            alt="Remy Sharp"
             src={CookBookLogo}
            className="icon"
          />
        </div>

        <div className="us-div">
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            className="userText"
            onChange={handleUserChange}
          />
        </div>

        <div className="pass-div">
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            className="passText"
            onChange={handlePassChange}
          />
        </div>

        <div >
            <button className="button_I" onClick={Clicked}>
              Login
            </button>
        </div>
      </div>
    </div>
  );
}
