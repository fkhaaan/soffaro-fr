
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePopularSofas } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../lib/types/product";
import { serverApi } from "../../lib/config";

/** REDUX SLICE & SELECTOR */
const popularSofasRetriever = createSelector(
    retrievePopularSofas,
    (popularSofas) => ({ popularSofas })
);

export default function PopularSofas() {
    const {popularSofas} = useSelector(popularSofasRetriever);

    return (
    <div className="popular-sofas-frame">
        <Container>
            <Stack className="popular-section">
                <Box className="category-title">POPULAR SOFAS</Box>

                <Stack className="cards-frame">
                    {popularSofas.length !== 0 ? (
                        popularSofas.map((product: Product) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
                     <CssVarsProvider key={product._id}>
                        <Card className="card">
                            <CardCover>
                                <img src={imagePath} alt="" />
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
                                        {product.productName}
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontWeight: "md",
                                        color: "neutral.300",
                                        alignItems: "center",
                                        display: "flex"
                                    }}
                                    >
                                        {product.productViews}
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