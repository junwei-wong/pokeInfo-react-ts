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
      <select
        name="pokemon_list"
        id="pokemon_list"
        onChange={onChangeHandler}
        className="capitalize outline-dotted rounded-sm"
      >
        <option value="">Pokemon</option>
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
