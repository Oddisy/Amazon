import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API} from "./constant";
const baseurl = import.meta.env.VITE_APP_SIGNUP_BASE_URL;

export const amazonApi = createApi({
	reducerPath: "amazonSiteApi",
	baseQuery: fetchBaseQuery({baseUrl: baseurl}),
	endpoints: (builder) => ({
		signup: builder.mutation({
			query: ({...values}) => ({
				url: API.SIGN_UP,
				method: "POST",
				body: {...values},
			}),
		}),
		login: builder.mutation({
			query: ({...values}) => ({
				url: API.LOGIN,
				method: "POST",
				body: {...values},
			}),
		}),
	}),
});
export const {useSignupMutation, useLoginMutation} = amazonApi;
