
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import VisibilityIcon from "@mui/icons-material/Visibility";

const list = [
    
     {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Green", imagePath: "/img/threegreen.png"},
    {productName: "Green", imagePath: "/img/threeyellow.png"},
];

export default function PopularSofas() {
    return (
    <div className="popular-sofas-frame">
        <Container>
            <Stack className="popular-section">
                <Box className="category-title">POPULAR SOFAS</Box>

                <Stack className="cards-frame">
                    {list.length !== 0 ? (
                        list.map((ele, index) => {
                    return (
                     <CssVarsProvider key={index}>
                        <Card className="card">
                            <CardCover>
                                <img src={ele.imagePath} alt="" />
                            </CardCover>
                            <CardCover className="card-cover"/>
                            <CardContent className="card-content" sx={{justifyContent: "flex-end"}}>
                                <Stack
                                 flexDirection={"row"}
                                 justifyContent={"space-between"}
                                >
                                    <Typography
                                    level="h2"
                                    fontSize="lg"
                                    textColor="#ffffff"
                                     >
                                        {ele.productName}
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontWeight: "md",
                                        color: "neutral.300",
                                        alignItems: "center",
                                        display: "flex"
                                    }}
                                    >
                                        20
                                     <VisibilityIcon 
                                     sx={{ fontSize: 23, marginLeft: "5px", color: "white"}}
                                     />
                                    </Typography>

                                    
                                </Stack>
                               
                            
                            </CardContent>
                          
                        </Card>
                     </CssVarsProvider>
                    );
                  })
                ) : (
                    <Box className="no-data">Popular products are not available!</Box>
                )}
                  

                </Stack>
            </Stack>
        </Container>
    </div>
);
}