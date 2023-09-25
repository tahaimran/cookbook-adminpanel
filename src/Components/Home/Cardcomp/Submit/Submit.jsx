import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import SideBar from "../../SideBar/sidebar";
import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../Configuration/firebase";
import { useState } from "react";
import "./submit.css";
import SideBar from "../../../SideBar/sidebar";
import { db } from "../../../../Configuration/firebase";
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
    <>
      <SideBar/>
      <Paper className="submitBox">
        <Box>
          <Typography variant="h4">Feel Free To Share New Ideas.</Typography>
        </Box>
        <Box>
          <TextField
            value={Name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
        </Box>
        <Box>
          <TextField
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
        </Box>

        <Box>
          <TextField
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            id="outlined-multiline-static"
            label="Suggestion"
            multiline
            rows={4}
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <Button onClick={createSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Submit;
