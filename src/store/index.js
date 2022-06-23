// import configureStore
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice";

/**
 * Buat Store: state global
 * Menyimpan berbagai slice reducer
 */

const store = configureStore({
    reducer:{
        covid: covidReducer,
    }, 
});

export default store;