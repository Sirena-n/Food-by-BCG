import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const BasketSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        
    }
})

export const { getProducts } = ProductsSlice.actions
export default ProductsSlice.reducer