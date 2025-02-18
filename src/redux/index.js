import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/count.slice";
import wishlist from "./features/wishlist.slice";
import cart from "./features/cart.slice";
import auth from "./features/auth.slice";
import { dummyApi, mainApi } from "./api";
import { carApi } from "./api";

export const store = configureStore({
  reducer: {
    counter,
    wishlist,
    cart,
    auth,
    [mainApi.reducerPath]: mainApi.reducer,
    [carApi.reducerPath]: carApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      mainApi.middleware,
      carApi.middleware,
      dummyApi.middleware,
    ),
});
