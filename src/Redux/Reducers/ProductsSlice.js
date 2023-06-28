import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        makeCardViewed: (state, action) => {
            const cardId = action.payload;
            const card = state.data.find((card) => cardId === card.id);
            if(card){
                card.viewed = true
            }
        }
    }
})

export const { getProducts } = ProductsSlice.actions
export default ProductsSlice.reducer