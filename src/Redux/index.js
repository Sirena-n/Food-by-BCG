import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./Reducers/ProductsSlice";

import { ProductsApi } from "./ProductsApi/ProductsApi";

const rootReducer = combineReducers({
    products: ProductsSlice,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductsApi.middleware),
});