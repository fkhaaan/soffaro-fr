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
                        popularSofas.map((product: Product, index: number) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
                     <CssVarsProvider key={product._id}>
                        <Card className="card">
                            <CardCover className="card-media">
                                <img src={imagePath} alt={product.productName} />
                            </CardCover>
                            <CardCover className="card-cover"/>
                            <CardContent className="card-content" sx={{justifyContent: "space-between"}}>
                                <Stack className="card-top">
                                    <Box className="rank-badge">{index + 1}</Box>
                                    <Box className="views-badge">
                                        <VisibilityIcon className="views-icon" />
                                        {product.productViews}
                                    </Box>
                                </Stack>
                                <Stack className="card-bottom">
                                    <Box className="gold-rule" />
                                    <Typography
                                    level="h2"
                                    className="card-name"
                                     >
                                        {product.productName}
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
