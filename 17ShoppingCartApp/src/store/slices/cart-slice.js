// CreateSlice
// Initialize initial state 1
//slice->name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit"
const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, actions) {
            console.log(actions)
            state.push(actions.payload)
        },
        removeFromCart(state, actions) {
            return state.filter(item => item.id !== actions.payload)
        }

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;