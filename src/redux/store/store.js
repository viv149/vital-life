import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from "../slice/addCartSlice";   


const store = configureStore({
    reducer: {
        addcart: addCartReducer,
    },
});

export default store;