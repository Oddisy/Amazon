import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	products: [],
	usersInfo: [],
};

export const amazonSlice = createSlice({
	name: "amazon",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.products.find((item) => item.id === action.payload.id);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
			}
		},
		toggleDescription: (state, action) => {
			const product = state.products.find(
				(item) => item.id === action.payload.id
			);
			if (product) {
				product.expanded = action.payload.expanded;
			}
		},
		deleteItem: (state, action) => {
			state.products = state.products.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});
export const {addToCart, toggleDescription, deleteItem} = amazonSlice.actions;
export default amazonSlice.reducer;
