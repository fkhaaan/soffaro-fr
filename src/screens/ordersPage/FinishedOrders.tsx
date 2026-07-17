
import { Box, Stack} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveFinishedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../lib/types/order";
import { Product } from "../../lib/types/product";
import { serverApi } from "../../lib/config";

/** REDUX SLICE & SELECTOR */
const finishedOrdersRetriever = createSelector(
    retrieveFinishedOrders,
    (finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders() {
    const { finishedOrders } = useSelector(finishedOrdersRetriever);
    return (
        <TabPanel value={"3"}>
            <Stack>
                {finishedOrders.map((order: Order) => {
                    return (
                        <Box key={order._id} className="order-main-box">
                            <Box className="order-card-head">
                                <div className="order-id-box">
                                    <span className="order-id-label">Order</span>
                                    <span className="order-id-value">#{order._id.slice(-8).toUpperCase()}</span>
                                </div>
                                <div className="order-head-right">
                                    <span className="order-date">
                                        {moment(order.createdAt).format("YYYY-MM-DD HH:mm")}
                                    </span>
                                    <span className="order-status-badge finished">
                                        {order.orderStatus}
                                    </span>
                                </div>
                            </Box>
                            <Box className="order-box-scroll">
                                {order?.orderItems.map((item: OrderItem) => {
                                    const product: Product = order.productData.filter(
                                        (ele: Product) => item.productId === ele._id
                                    )[0];
                                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                                    return (
                                        <Box key={item._id} className="order-name-price">
                                            <img
                                                src={imagePath} alt=""
                                                className="order-sofa-img"
                                            />
                                            <p className="title-sofa">{product.productName}</p>
                                            <Box className="price-box">
                                                <p>${item.itemPrice}</p>
                                                <img src="/icons/close.svg" alt="" />
                                                <p>{item.itemQuantity}</p>
                                                <img src="/icons/pause.svg" alt="" />
                                                <p style={{ marginLeft: "15" }}>${item.itemQuantity * item.itemPrice}</p>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className="total-price-box">
                                <Box className="box-total">
                                    <p>Product price</p>
                                    <p>${order.orderTotal - order.orderDelivery}</p>
                                    <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} alt="" />
                                    <p>delivery cost</p>
                                    <p>${order.orderDelivery}</p>
                                    <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} alt="" />
                                    <p>Total</p>
                                    <p>${order.orderTotal}</p>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}

                {!finishedOrders ||
                    (finishedOrders.length === 0 && (
                        <Box className="no-orders-frame">
                            <img src="/icons/noimage-list.svg"
                                className="no-orders-img"
                                alt="" />
                            <span className="no-orders-title">No finished orders yet</span>
                            <span className="no-orders-desc">
                                Completed orders will appear here.
                            </span>
                        </Box>
                    ))}
            </Stack>
        </TabPanel>
    );
}