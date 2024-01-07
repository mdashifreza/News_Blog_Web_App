import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsData : [],
    token : null,
}

const ApiData = createSlice({
    name : 'Api',
    initialState,

    reducers: {
        addData : (state, action) => {
            return { ...state, newsData: action.payload };
        },
        tokenData : (state, action) => {
            state.token = action.payload;
        },
    }
})
// console.log("Action", ApiData)

export const { addData, tokenData } = ApiData.actions;

export default ApiData.reducer;