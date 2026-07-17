import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { Messages, serverApi } from "../../../lib/config";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import OrderService from "../../services/OrderService";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";

interface BasketProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
  const { cartItems = [], onAdd, onRemove, onDelete, onDeleteAll } = props;

  const { authMember, setOrderBuilder } = useGlobals();
  const navigate = useNavigate();
  const itemsPrice = cartItems.reduce(
    (a: number, c: CartItem) => a + c.quantity * c.price, 0);
  const shippingCost = itemsPrice < 1000 ? 50 : 0;
  const totalPrice = (itemsPrice + shippingCost).toFixed(1);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const proceedOrderHandler = async () => {
    try {
      handleClose();
      if (!authMember) throw new Error(Messages.error2);

      const order = new OrderService();
      await order.createOrder(cartItems);

      onDeleteAll();

      setOrderBuilder(new Date());
      navigate("/orders");

    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  }

  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={cartItems.length} color="secondary">
          <img src={"/icons/shopping-cart.svg"} alt="" />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.18))",
            mt: 1.5,
            borderRadius: "16px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket-frame"}>
          <Box className={"all-check-box"}>
            {cartItems.length === 0
              ? (<span className={"basket-title"}>Shopping Cart</span>)
              : (<Stack className={"basket-head-row"} flexDirection={"row"}>
                <Stack className={"basket-title-box"} flexDirection={"row"}>
                  <span className={"basket-title"}>Shopping Cart</span>
                  <span className={"basket-count"}>
                    {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                  </span>
                </Stack>
                <DeleteForeverIcon
                  className={"clear-all-icon"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => onDeleteAll()}
                />
              </Stack>

              )}
          </Box>

          {cartItems.length === 0 ? (
            <Box className={"basket-empty"}>
              <div className={"empty-icon-circle"}>
                <ShoppingCartIcon className={"empty-icon"} />
              </div>
              <span className={"empty-title"}>Cart is empty!</span>
              <span className={"empty-desc"}>
                Sofas you add will appear here.
              </span>
            </Box>
          ) : (
            <Box className={"orders-main-wrapper"}>
              <Box className={"orders-wrapper"}>
                {cartItems.map((item: CartItem) => {
                  const imagePath = `${serverApi}/${item.image}`;
                  return (
                    <Box className={"basket-info-box"} key={item._id}>
                      <img src={imagePath} className={"product-img"} alt={item.name} />
                      <Stack className={"item-details"}>
                        <span className={"product-name"}>{item.name}</span>
                        <p className={"product-price"}>${item.price} x {item.quantity}</p>
                        <div className="col-2">
                          <button
                            onClick={() => onRemove(item)}
                            className="remove">-</button>
                          <span className={"qty-value"}>{item.quantity}</span>
                          <button
                            onClick={() => onAdd(item)}
                            className="add">+</button>
                        </div>
                      </Stack>
                      <div className={"cancel-btn"}>
                        <CancelIcon
                          onClick={() => onDelete(item)}
                        />
                      </div>
                    </Box>
                  );
                })}

              </Box>
            </Box>
          )}

          {cartItems.length !== 0 ? (
            <Box className={"basket-order"}>
              <Stack className={"summary-rows"}>
                <div className={"summary-row"}>
                  <span>Subtotal</span>
                  <span>${itemsPrice}</span>
                </div>
                <div className={"summary-row"}>
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost}`}</span>
                </div>
                <div className={"summary-row total"}>
                  <span>Total</span>
                  <span className={"price"}>${totalPrice}</span>
                </div>
              </Stack>
              <Button
                onClick={proceedOrderHandler}
                startIcon={<ShoppingCartIcon />}
                variant={"contained"}
                className={"order-btn"}
                disableElevation
                >
                Order
              </Button>
            </Box>
          ) : ("")}

        </Stack>
      </Menu>
    </Box>
  );
}
