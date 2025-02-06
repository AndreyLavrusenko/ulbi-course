import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCALSTORAGE_USER_KEY } from "@/shared/const/localstorage";
import { baseUrl } from "@/shared/api/api";

export const rtkApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || "";
            if (token) {
                headers.set("Authorization", token);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
