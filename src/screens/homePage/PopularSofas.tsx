
import { Box, Button, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from "@mui/joy/CardOverflow"
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const list = [
    {productName: "SuperSofa", imagePath: "/img/longblack.png"},
     {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Green", imagePath: "/img/threegreen.png"},
    {productName: "Green", imagePath: "/img/threeyellow.png"},
];

export default function PopularSofas() {
    return (
    <div className="popular-dishes-frame">
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
                            <CardContent sx={{justifyContent: "flex-end"}}>
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
                                     sx={{ fontSize: 25, marginLeft: "5px", color: "white"}}
                                     />
                                    </Typography>
                                    
                                </Stack>
                               <Box className="shopping-button" display="flex" alignItems="center" justifyContent="center">
                                <span className="buy-text">Buy Now</span>
                                <AddShoppingCartIcon className="buy-icon" fontSize="large"/>
                                </Box>
                            
                            </CardContent>
                            <CardOverflow 
                            sx={{
                                display: "flex",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                borderTop: "1px solid",
                                height: "60px"
                            }}
                            >

                            </CardOverflow>
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