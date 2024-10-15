import type { Name } from "../../app/types"
const PokemonSelector = ({
  pokemons,
  triggerPokeApi,
}: {
  pokemons: Name[]
  triggerPokeApi: (pokemonName: string) => void
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) triggerPokeApi(event.target.value)
  }
  return (
    <>
      <label htmlFor="pokemon">Choose your pokemon from the list: </label>
      <select
        className="capitalize border-gray-900 border-2 rounded w-fit"
        name="pokemon_list"
        id="pokemon_list"
        onChange={onChangeHandler}
      >
        <option value="">Select</option>
        {pokemons.map((pokemon, index) => (
          <option
            key={pokemon.name}
            value={pokemon.name}
            className="capitalize"
          >
            {index + 1}. {pokemon.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default PokemonSelector
