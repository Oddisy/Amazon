import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    usersInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon", 
    initialState, 
    reducers: {
        addToCart:(state, action)=>{
            state.products = action
        }
    }
})
export const{addToCart} = amazonSlice.actions;
export default amazonSlice.reducer;