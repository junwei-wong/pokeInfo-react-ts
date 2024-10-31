import { GenSelector } from "../../features/genSelector/GenSelector"
import {
  selectGenEnd,
  selectGenStart,
} from "../../features/genSelector/genSelectorSlice"
import PokemonInfo from "../../features/pokemonInfo/PokemonInfo"
import {
  useGetPokemonListByIndexQuery,
  useLazyGetPokemonByNameQuery,
} from "../../features/pokemonInfo/pokemonInfoSlice"
import PokemonSelector from "../../features/pokemonSelector/PokemonSelector"
import { useAppSelector } from "../hooks"
import type { Name, Pokemon as PokemonType } from "../types"

const Pokemon = () => {
  const genStart = useAppSelector(selectGenStart)
  const genEnd = useAppSelector(selectGenEnd)
  const { data: pokemons = [] as Name[] } = useGetPokemonListByIndexQuery({
    genStart,
    genEnd,
  })
  const [triggerPokeApi, { data: pokemonInfoData = {} as PokemonType }] =
    useLazyGetPokemonByNameQuery()

  return (
    <div>
      <div className="flex flex-row gap-2">
        <GenSelector />
        <PokemonSelector pokemons={pokemons} triggerPokeApi={triggerPokeApi} />
      </div>
      {pokemonInfoData.name ? (
        <PokemonInfo pokemonInfo={pokemonInfoData} />
      ) : null}
    </div>
  )
}

export default Pokemon
