import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import HomePageReducer from "../screens/homePage/slice";
import ProductsPageReducer from "../screens/productsPage/slice";
import OrdersPageReducer from "../screens/ordersPage/slice";

const logger = createLogger({
  collapsed: true, // cleaner console
});
export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const makeStore = (_preloadedState?: Partial<RootState>) => store;
