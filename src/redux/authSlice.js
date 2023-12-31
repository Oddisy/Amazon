import {createSlice} from "@reduxjs/toolkit";
//  initial state for the authentication slice
const initialState = {
	token: "",
	email: "",
};

const authSlice = createSlice({
	name: "amazonAuth", // Name of the slice, used in the Redux store, can be any name but descriptive
	initialState,
	reducers: {
		// Reducer to set the user's authentication token to the local browser
		setUserValues: (state, action) => {
			state.token = action.payload.token;
			localStorage.setItem("token", state.token);
		},
		clearToken: (state) => {
			state.token = ""; // Clears the token by setting it to an empty string
		},
		// Reducer to set the user's email in the local browser
		setLoginEmailValues: (state, action) => {
			state.email = action.payload.email;
			localStorage.setItem("email", state.email);
		},
	},
});
// Export the action creators from the auth slice
export const {setUserValues, setLoginEmailValues} = authSlice.actions;
// Export the reducer from the auth slice
export default authSlice.reducer;
