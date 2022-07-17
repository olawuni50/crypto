import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '571f94e705msh4a21b1dda1c1fc0p18d850jsnf9e56d4b659f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({ 
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getExchanges: builder.query({
            // query: ({coinId, limit, offset, orderBy}) => createRequest(`coin/${coinId}/exchanges/?limit=${limit}?offset=${offset}?orderBy=${orderBy}`)
            query: () => createRequest('/exchanges')
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
        }),
    })
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery,
useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi