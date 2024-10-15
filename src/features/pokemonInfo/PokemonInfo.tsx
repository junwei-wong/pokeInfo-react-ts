// import { useSelector } from "react-redux"
import style from "./PokemonInfo.module.css"
import { selectGenEnd, selectGenStart } from "../genSelector/genSelectorSlice"
import { useAppSelector } from "../../app/hooks"
import {
  useGetPokemonListByIndexQuery,
  useLazyGetPokemonByNameQuery,
} from "./pokemonInfoSlice"
import PokemonSelector from "../pokemonSelector/PokemonSelector"
import type { Pokemon } from "../../app/types"

const PokemonInfo = () => {
  const genStart = useAppSelector(selectGenStart)
  const genEnd = useAppSelector(selectGenEnd)
  const { data: pokemons = [], isFetching } = useGetPokemonListByIndexQuery({
    genStart,
    genEnd,
  })
  const [triggerPokeApi, { data: pokemonInfoData = {} as Pokemon }] =
    useLazyGetPokemonByNameQuery()

  return (
    <div className="outline-gray-950 p-1 flex flex-col">
      <PokemonSelector pokemons={pokemons} triggerPokeApi={triggerPokeApi} />
      {pokemonInfoData.name ? (
        <InfoDetails pokemonInfo={pokemonInfoData} />
      ) : null}
      {isFetching ? "Loading" : null}
    </div>
  )
}

const InfoDetails = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
  return (
    <>
      <section id="cries">
        <h1>Cries</h1>
        <p>Latest</p>
        <audio controls>
          <source src={pokemonInfo?.cries.latest} type="audio/ogg" />
        </audio>
        <p>Legacy</p>
        <audio controls>
          <source src={pokemonInfo?.cries.legacy} type="audio/ogg" />
        </audio>
      </section>
      <section id="sprites">
        <h1>Sprites</h1>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img
                    loading="lazy"
                    src={pokemonInfo?.sprites?.front_default}
                    alt="front sprite"
                  />
                </div>
              </td>
              <td>
                <div>
                  <img
                    loading="lazy"
                    src={pokemonInfo?.sprites?.back_default}
                    alt="back sprite"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    loading="lazy"
                    src={pokemonInfo?.sprites?.front_shiny}
                    alt="front sprite"
                  />
                </div>
              </td>
              <td>
                <div>
                  <img
                    loading="lazy"
                    src={pokemonInfo?.sprites?.back_shiny}
                    alt="back sprite"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default PokemonInfo
