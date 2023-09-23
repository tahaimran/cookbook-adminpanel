import React from "react";
import "./Login.css";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Card className="mainDiv">
        <div className="av-div">
          <Avatar
            alt="Remy Sharp"
            src="https://media.licdn.com/dms/image/C560BAQFcGZ0J5P2_VA/company-logo_200_200/0/1677789295837?e=1687996800&v=beta&t=HCqcy3yQdD2rUgI40S-QLhs_MEXcxVhOS2aVmF24b64"
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
      </Card>
    </div>
  );
}
