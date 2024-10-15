// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { PokeApiResponse, Pokemon } from "../../app/types"

// Define a service using a base URL and expected endpoints
export const pokemonInfoApiSlice = createApi({
  reducerPath: "pokemonInfoApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => ({
        url: `pokemon/${name}`,
      }),
      transformResponse: (response: Pokemon) => response,
    }),
    getPokemonListByIndex: builder.query({
      query: ({ genStart, genEnd }) => ({
        url: `pokemon/`,
        params: {
          limit: genEnd - genStart,
          offset: genStart,
        },
      }),
      transformResponse: (response: PokeApiResponse) => response.results,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
  useGetPokemonListByIndexQuery,
  useLazyGetPokemonListByIndexQuery,
} = pokemonInfoApiSlice
