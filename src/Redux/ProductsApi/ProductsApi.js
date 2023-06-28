import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProductsApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8089/'}),
    endpoints: (build) =>({
        getPoints: build.query({
            query: () => 'products'
        }), 
        getNewProducts: build.query({
            query: (newProducts) => `products?status=${newProducts}`,
        }),
        getSalesProducts: build.query({
            query: (sales) => `products?sales=${sales}`,
        }),
        getViewedProducts: build.query({
            query: (viewed) => `products?viewed=${viewed}`,
        })
    })
}) 

export const { useGetPointsQuery, useGetNewProductsQuery, useGetSalesProductsQuery } = ProductsApi;