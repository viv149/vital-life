import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: [],
    count: 0
}

export const addCartSlice = createSlice({
    name: "addcart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existItem = state.cart.find(item => item.id === action.payload.id);
            if(existItem) {
                existItem.qty += 1;
            } else {
                state.cart.push(action.payload);
            }
            state.count = state.cart.reduce((total, item) => total + item.qty, 0);
        },
        increamentQty: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.qty += 1;
            }
            state.count = state.cart.reduce((total, item) => total + item.qty, 0);
        },
        decreamentQty: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.qty -= 1;
            }
            state.count = state.cart.reduce((total, item) => total + item.qty, 0);
        },
        clearCart: (state) => {
            state.cart = [];
            state.count = 0;
        }
    }
});
console.log(addCartSlice.actions);

export const { addToCart, increamentQty, decreamentQty, clearCart } = addCartSlice.actions;
export default addCartSlice.reducer;