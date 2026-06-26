import React from "react";
import { Box, Container,  Stack, Tabs } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Typography from '@mui/joy/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import "../../css/help.css";
import { faq } from "../../lib/data/faq";
import { terms } from "../../lib/data/terms";

export default function HelpPage() {
  const [value, setValue] = React.useState("1");

  /** HANDLERS **/
  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"help-page"}>
      <Container className={"help-container"}>
        <TabContext value={value}>
          <Box className={"help-menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "#D4AF37" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
                className={"table_list"}
              >
                 <Tab label="CONTACT" value={"1"}  sx={{ color: "#dab440", fontWeight: 600 }}/>
                <Tab label="TERMS" value={"3"} sx={{ color: "#dab440", fontWeight: 600 }} />
                <Tab label="FAQ" value={"2"} sx={{ color: "#dab440", fontWeight: 600 }} />
               
              </Tabs>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help-main-content"}>
              <TabPanel value={"3"}>
                <Stack className={"rules-box"}>
                  <Box className={"rules-frame"}>
                    {terms.map((value, number) => {
                      return <p key={number}>{value}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value={"2"}>
                <Stack className={"accordion-menu"}>
                  {faq.map((value, number) => {
                    return (
                      <Accordion key={number}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{value.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{value.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value={"1"}>
                <Container className={"contact-area"}>
                  <Stack>

                <Grid flexDirection={"row"} container spacing={8}>
               <Grid size={ {xs:12, md:4}}>
              <Box className="card-box">
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
                  <LocalPhoneIcon/>
                  <Typography
                          level="h3"
                          fontSize="22px"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2.5"}
                          >
                    BY PHONE
                </Typography>
                <Typography
                          level="h1"
                          fontSize="16px"
                          textColor="black"
                          fontWeight={"400"}
                          lineHeight={"2.5"}
                          >
                    Talk to our advisors
                </Typography>
                <Typography
                          level="h3"
                          fontSize="lg"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2"}
                          >
                    +82 10 9989 7711
                </Typography>
                </Box>
                </Box>
             </Grid>

             <Grid size={{xs:12, md:4}}>
              <Box className="card-box">
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
                  <EmailIcon/>
                  <Typography
                          level="h3"
                          fontSize="22px"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2.5"}
                          >
                    BY EMAIL
                </Typography>
                <Typography
                          level="h1"
                          fontSize="16px"
                          textColor="black"
                          fontWeight={"400"}
                          lineHeight={"2.5"}
                          >
                    Send us your inquiry
                </Typography>
                <Typography
                          level="h3"
                          fontSize="lg"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2"}
                          >
                    info@soffaro-store.com
                </Typography>
                </Box>
                
              </Box>
             </Grid>

                      <Grid size={{ xs: 12, md: 4 }}>
         < Box className="card-box">
         <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
                  <LocationPinIcon/>
                  <Typography
                          level="h3"
                          fontSize="22px"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2.5"}
                          >
                    IN STORE
                </Typography>
                <Typography
                          level="h1"
                          fontSize="16px"
                          textColor="black"
                          fontWeight={"400"}
                          lineHeight={"2.5"}
                          >
                    Visit our flagship
                </Typography>
                <Typography
                          level="h3"
                          fontSize="lg"
                          textColor="black"
                          fontWeight={"600"}
                          lineHeight={"2"}
                          >
                    Heundae-gu,Busan
                </Typography>
                </Box>
         
                </Box>
                </Grid>
               </Grid>
                  </Stack>
                   <div className="address">
                <Box className="address-area" sx={{width: "100%",height: "400px" }}>
            <iframe
            src="https://maps.google.com/maps?q=Haeundae%20Beach%20Busan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="980"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            />
            </Box>
            </div>
                </Container>
              </TabPanel>
            </Stack>
          </Stack>

        </TabContext>
        
      </Container>
    </div>
  );
}
