import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartsSlice",
    initialState,
    reducers: {

        //add to cart
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                state.carts.push({ ...action.payload, qnty: 1 });
            }
        },
        incrementQty: (state, action) => {
            const item = state.carts.find(
                (i) => i.id === action.payload
            );
            if (item) item.qnty += 1;
        },

        decrementQty: (state, action) => {
            const item = state.carts.find(
                (i) => i.id === action.payload
            );
            if (item && item.qnty > 1) item.qnty -= 1;
        },
        deleteItem: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
        },
        emptyCart: (state,action) => {
            state.carts = []
        }


    }
});

export const { addToCart, incrementQty, decrementQty,deleteItem,emptyCart } = cartSlice.actions

export default cartSlice.reducer