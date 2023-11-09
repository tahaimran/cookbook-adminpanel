import {TextField} from "@mui/material";
import React from "react";
// import SideBar from "../../SideBar/sidebar";
import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../Configuration/firebase";
import { useState } from "react";
import "./submit.css";

import { db } from "../../Configuration/firebase";
import SideBar from "../../Layout/SideBar/sidebar";
import Tickets from "../tickets/tickets";
function Submit() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const recCollectionRef = collection(db, "tickets");
  const createSubmit = async () => {
    await addDoc(recCollectionRef, {
      Name: Name,
      Email: Email,
      Message: Message,
    });
    alert("Ticket Submitted");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <SideBar />

      <div className="main_box">

        <div className="submitBox">
          <div>
            <h1 variant="h4">Feel Free To Share New Ideas</h1>
          </div>
          <div>
            <TextField
              value={Name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              id="outlined-multiline-static"
              label="Suggestion"
              multiline
              rows={4}
              sx={{ width: "400px"  }}
            />
          </div>
          <div>
            <button className="button_submit" onClick={createSubmit} variant="contained">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Tickets/>
    </div>
  );
}

export default Submit;
