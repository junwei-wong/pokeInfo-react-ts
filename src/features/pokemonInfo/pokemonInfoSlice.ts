// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Pokemon {
  name: string
  url: string
}

interface PokeApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

// Define a service using a base URL and expected endpoints
export const pokemonInfoApiSlice = createApi({
  reducerPath: "pokemonInfoApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => ({
        url: `pokemon/${name}`,
      }),
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
  useGetPokemonListByIndexQuery,
  useLazyGetPokemonListByIndexQuery,
} = pokemonInfoApiSlice
