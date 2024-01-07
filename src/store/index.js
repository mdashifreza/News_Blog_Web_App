import { configureStore } from "@reduxjs/toolkit";
import ApiData from "./features/ApiData";

export const store = configureStore({
    reducer : {
        Api: ApiData,
    }  
})