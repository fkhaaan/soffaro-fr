
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useParams } from "react-router-dom";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function ChosenProduct() {
   useParams();
  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>SOFA DETAIL</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {["/img/threegreen.png", "/img/threegreen.png"].map(
              (ele: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img className="slider-image" src={ele} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>GREEN SOFA</strong>
            <span className={"collection-name"}>Classic</span>
            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>20</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>Our classic best sofa</p>
            <Divider height="3" width="100%" bg="rgb(212, 175, 55)" />
            <div className={"product-price"}>
              <span>PRICE:</span>
              <span>$12</span>
            </div>
            <div className={"button-box"}>
              <Button startIcon={<ShoppingCartIcon />} variant="contained" color="secondary">Add To Basket</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
