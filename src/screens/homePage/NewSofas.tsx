import { Box, Button, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import JoyButton from "@mui/joy/Button";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { retrieveNewSofas } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product } from "../../lib/types/product";
import { CartItem } from "../../lib/types/search";
import { serverApi } from "../../lib/config";
import { useNavigate } from "react-router-dom";

/** REDUX  SELECTOR */
const newSofasRetriever = createSelector(
  retrieveNewSofas,
  (newSofas: Product[]) => ({ newSofas })
);

interface NewSofasProps {
  onAdd: (item: CartItem) => void;
}

export default function NewSofas(props: NewSofasProps) {
  const { onAdd } = props;
  const navigate = useNavigate();
  const { newSofas } = useSelector(newSofasRetriever);

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
                    <Card key={product._id} variant="outlined" className="card">
                      <CardOverflow className="media">
                        <div className="product-sale">New Added</div>
                        <div className="product-views">
                          <VisibilityOutlinedIcon className="view-icon" />
                          {product.productViews}
                        </div>
                        <AspectRatio ratio="4/3" className="media-ratio">
                          <img
                            src={imagePath}
                            alt={product.productName}
                            loading="lazy"
                          />
                        </AspectRatio>
                      </CardOverflow>

                      <CardContent className="product-detail">
                        <Stack className="info-row">
                          <Typography className="collection">
                            {product.productCollection}
                          </Typography>
                          <Typography className="title" noWrap>
                            {product.productName}
                          </Typography>
                          <Typography className="price">
                            ${product.productPrice}
                          </Typography>
                        </Stack>

                        <Stack className="actions">
                          <JoyButton
                            className="cart-btn"
                            variant="solid"
                            startDecorator={<ShoppingCartOutlinedIcon />}
                            onClick={(e) => {
                              e.stopPropagation();
                              onAdd({
                                _id: product._id,
                                quantity: 1,
                                name: product.productName,
                                price: product.productPrice,
                                image: product.productImages[0],
                              });
                            }}
                          >
                            Add to Cart
                          </JoyButton>
                          <JoyButton
                            className="view-btn"
                            variant="outlined"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/products/${product._id}`);
                            }}
                          >
                            View Details
                          </JoyButton>
                        </Stack>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New arrivals are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
        <Box className="view-all">
          <Button
            className="view-all-btn"
            variant="outlined"
            onClick={() => navigate("/products")}
          >
            VIEW ALL ARRIVALS
          </Button>
        </Box>
      </Container>
    </div>
  );
}
