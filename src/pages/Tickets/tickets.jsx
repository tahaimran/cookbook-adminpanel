import React, { useEffect, useState } from "react";
import { collection,  getDocs } from "firebase/firestore";
import { db } from "../../Configuration/firebase";
import { Box } from "@mui/material";
import "./Tickets.css";
import SideBar from "../../Layout/SideBar/sidebar";

function Tickets() {

  const [tickets, setTickets] = useState([]);
  const recCollectionRef = collection(db, "tickets");
  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recCollectionRef);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, []);

  return (
    <div>
      <SideBar />
      
      <div className="main">
        <Box className="tickets">
            <h1 className="tickets_header">Tickets</h1>
          <Box>
            {tickets.map((tickets, i) => {
                return (
                  <div key={tickets.id} className="tickets_box">
                    <span >Name:
                        <h1>{tickets.Name}</h1>
                    </span>
                    <span >Email :
                        <h1>{tickets.Email}</h1>
                    </span>
                    <span >Message:
                        <h1>{tickets.Message}</h1>
                    </span>
                 
                   
                  </div>
                );
              })}
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Tickets;
