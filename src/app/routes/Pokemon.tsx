import { GenSelector } from "../../features/genSelector/GenSelector"
import PokemonInfo from "../../features/pokemonInfo/PokemonInfo"

const Pokemon = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-1 m-1">
      <GenSelector />
      <PokemonInfo />
    </div>
  )
}

export default Pokemon
