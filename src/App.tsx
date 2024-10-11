import "./App.css"
import { GenSelector } from "./features/genSelector/GenSelector"
import PokemonInfo from "./features/pokemonInfo/PokemonInfo"

const App = () => {
  return (
    <div className="App">
      <GenSelector />
      <PokemonInfo />
    </div>
  )
}

export default App
