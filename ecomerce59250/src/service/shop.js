// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Category from '../components/Category'
import { URL_FIREBASE } from '../firebase/database'

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    tagTypes: ["order"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json",

        }),
        getProductos: builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {

                const data = Object.values(response)

                return data
            }

        }),
        getProducto: builder.query({
            query: (id) => `/products/${id}.json`
        }),
        postOrder: builder.mutation({
            query: ({ userId, order }) => ({
                url: `/orders/${userId}.json`,
                method: "POST",
                body: order


            })

        }),
        getOrdersByUser: builder.query({
            query: (localId) => `/orders/${localId}.json`,
            transformResponse: (response) => {
                if (!response) return []
                const data = Object.entries(response).map(item => ({ id: item[0], ...item[1] }))
                return data
            },
            providesTags: ["order"]
        }),
        getOrderByUser: builder.query({
            query: ({ localId, orderId }) => `/orders/${localId}/${orderId}.json`
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery, useGetProductosQuery, useGetProductoQuery, usePostOrderMutation, useGetOrdersByUserQuery } = shopApi