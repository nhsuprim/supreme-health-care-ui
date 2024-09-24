// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = process.env.NEXT_PUBLIC_API_URL;

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:9000/api/v1" }),
    endpoints: (builder) => ({}),
});
