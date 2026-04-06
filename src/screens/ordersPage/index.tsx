import { SyntheticEvent, useState } from "react";
import { Box, Stack, Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../css/order.css"


export default function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = (_e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
             <Box sx={{borderBottom: 1, borderColor: "divider"}}>
               <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="table-list" 
              >
                <Tab label="PAUSED ORDERS"  value={"1"} sx={{ color: "#dab440", fontWeight: 600 }}/>
                <Tab label="PROCESS ORDERS" value={"2"} sx={{ color: "#dab440", fontWeight: 600 }}/>
                <Tab label="FINISHED ORDERS" value={"3"} sx={{ color: "#dab440", fontWeight: 600 }}/>
              </Tabs>
             </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders/>
              <ProcessOrders/>
              <FinishedOrders/>
            </Stack>
          </TabContext>
        </Stack>
        <Stack className="order-right">
           
          <Box className="order-payment-box">
            <input 
            type="text"
            name="Card Number"
            placeholder="Card Number: **** 4090 2002 7495"
            className="card-input"
            />
            <div style={{
              display:"flex", 
              flexDirection: "row", 
              justifyContent: "space-between"}}
              >
                <input
                type="text"
                name="Card Period"
                placeholder="06/27"
                className="card-half-input"
                />
                <input
                type="text"
                name="Card CVV"
                placeholder="CVV"
                className="card-half-input"
                />
              </div>
              <input
               type="text"
                name="Card Creator"
                placeholder="James Bond"
                className="card-input"
              />
              <Box className="cards-box">
                <img src="/icons/western-card.svg" alt=""/>
                 <img src="/icons/master-card.svg" alt=""/>
                  <img src="/icons/visa-card.svg" alt=""/>
                   <img src="/icons/paypal-card.svg" alt=""/>
              </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}