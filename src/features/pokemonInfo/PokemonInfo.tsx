import type { Pokemon } from "../../app/types"

const PokemonInfo = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
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
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Front</th>
              <th>Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
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
              <td>Shiny</td>
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
