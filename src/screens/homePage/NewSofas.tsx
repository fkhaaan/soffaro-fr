
import { Box, Button, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from '@mui/joy/Card';
import CardOverflow from "@mui/joy/CardOverflow"
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from "@mui/joy/styles";
import { retrieveNewSofas } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product } from "../../lib/types/product";
import { serverApi } from "../../lib/config";


/** REDUX  SELECTOR */
const newSofasRetriever = createSelector(
  retrieveNewSofas,
  (newSofas: any) => ({ newSofas })
);


export default function NewSofas() {
  const {newSofas} = useSelector(newSofasRetriever);

    return (
    <div className="new-products-frame">
        <Container>
            <Stack className="main">
                <Box className="category-title">NEW ARRIVALS</Box>

                <Stack className="cards-frame">
                    <CssVarsProvider>
                        {newSofas.length !== 0 ? (  
                             newSofas.map((product: Product) => {
                               const imagePath = `${serverApi}/${product.productImages[0]}`;
                            return (
                              <Card
                                key={product._id}
                                variant="outlined"
                                className={"card"}
                              >
                                <CardOverflow>
                                  <div className="product-sale">New Added</div>
                                  <AspectRatio ratio={"1"}>
                                    <img src={imagePath} alt="" />
                                  </AspectRatio>
                                </CardOverflow>

                                <CardOverflow
                                  variant="soft"
                                  className="product-detail"
                                >
                                  <Stack className="info">
                                    <Stack flexDirection={"row"}>
                                      <Typography className="title">
                                        {product.productName}
                                      </Typography>
                                    </Stack>
                                    <Stack>
                                      <Typography className="collection">
                                        {product.productCollection}
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </CardOverflow>
                              </Card>
                            )
                        })
                     ) : (
                        <Box className="no-data">Popular products are not available!</Box>
                        )}
                     
                    </CssVarsProvider>
                </Stack>
            </Stack>
             <Box className="view-all">
                <Button 
                className="view-all-btn" 
                 variant="outlined">VIEW ALL ARRIVALS</Button>
            </Box>
        </Container>
    </div>
);
}