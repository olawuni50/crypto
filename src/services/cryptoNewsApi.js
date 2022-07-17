import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '571f94e705msh4a21b1dda1c1fc0p18d850jsnf9e56d4b659f',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com' 
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoNewsHeader});

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const {useGetCryptoNewsQuery} = cryptoNewsApi