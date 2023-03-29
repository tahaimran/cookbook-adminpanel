import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideBar from "../../SideBar/sidebar";
import "./submit.css"
function Submit() {
  return (
    <>
      <SideBar />
      <Paper className="submitBox">
        <Box>
            <Typography variant="h4">Feel Free To Share New Ideas.</Typography>
        </Box>
        <Box>
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        </Box>
        <Box>
          <TextField id="outlined-basic" label="Email Address" variant="outlined" />
        </Box>

        <Box>
          <TextField
            id="outlined-multiline-static"
            label="Suggestion"
            multiline
            rows={4}
            sx={{width:"400px"}}
          />
        </Box>
        <Box><Button variant="contained">Submit</Button></Box>
      </Paper>
    </>
  );
}

export default Submit;
