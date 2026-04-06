
import { Box, Button, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from '@mui/joy/Card';
import CardOverflow from "@mui/joy/CardOverflow"
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from "@mui/joy/styles";


const newSofas = [
   {productName: "SuperSofa", imagePath: "/img/longblack.png"},
     {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Green", imagePath: "/img/threegreen.png"},
];

export default function NewSofas() {
    return (
    <div className="new-products-frame">
        <Container>
            <Stack className="main">
                <Box className="category-title">NEW ARRIVALS</Box>

                <Stack className="cards-frame">
                    <CssVarsProvider>
                        {newSofas.length !== 0 ? (  
                             newSofas.map((ele, index) => {
                            return (
                              <Card
                                key={index}
                                variant="outlined"
                                className={"card"}
                              >
                                <CardOverflow>
                                  <div className="product-sale">New Added</div>
                                  <AspectRatio ratio={"1"}>
                                    <img src={ele.imagePath} alt="" />
                                  </AspectRatio>
                                </CardOverflow>

                                <CardOverflow
                                  variant="soft"
                                  className="product-detail"
                                >
                                  <Stack className="info">
                                    <Stack flexDirection={"row"}>
                                      <Typography className="title">
                                        {ele.productName}
                                      </Typography>
                                    </Stack>
                                    <Stack>
                                      <Typography className="collection">
                                        CLASSIC
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