
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../app/components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useParams } from "react-router-dom";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setStore } from "./slice";
import { Member } from "../../lib/types/member";
import { Product } from "../../lib/types/product";
import { retrieveChosenProduct, retrieveStore } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../app/services/ProductService";
import { serverApi } from "../../lib/config";
import MemberService from "../../app/services/MemberService";

/** Redux slice & selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
  setStore: (data: Member) => dispatch(setStore(data)),
});

const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({ chosenProduct })
);
const storeRetriever = createSelector(
  retrieveStore,
  (store) => ({ store })
);

export default function ChosenProduct() {
  const { productId } = useParams<{ productId: string }>();
  const { setStore, setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const {store} = useSelector(storeRetriever);
  useEffect(() => {
    const product = new ProductService();
    product.getProduct(productId!)
      .then(data => setChosenProduct(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member.getStore()
      .then(data => setStore(data))
      .catch((err) => console.log(err));
  }, []);

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
            {chosenProduct?.productImages.map(
              (ele: string, index: number) => {
                const imagePath = `${serverApi}/${ele}`;
                return (
                  <SwiperSlide key={index}>
                    <img className="slider-image" src={imagePath} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>{chosenProduct?.productName}</strong>
            <span className={"collection-name"}>{store?.memberNick}</span>
            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>{chosenProduct?.productViews}</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>{chosenProduct?.productDesc ? chosenProduct?.productDesc : "No Description"}</p>
            <Divider height="3" width="100%" bg="rgb(212, 175, 55)" />
            <div className={"product-price"}>
              <span>PRICE:</span>
              <span>${chosenProduct?.productPrice}</span>
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
