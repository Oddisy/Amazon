import {configureStore} from "@reduxjs/toolkit";
import amazonReducer from "../redux/amazonSlice/";
import {amazonApi} from "../app/api";

export const store = configureStore({
	reducer: {
		amazonReducer,
		[amazonApi.reducerPath]: amazonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([amazonApi.middleware]),
});
