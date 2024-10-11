// import { useSelector } from "react-redux"
import style from "./PokemonInfo.module.css"
import { selectGenEnd, selectGenStart } from "../genSelector/genSelectorSlice"
import { useAppSelector } from "../../app/hooks"
import { useGetPokemonListByIndexQuery } from "./pokemonInfoSlice"

const PokemonInfo = () => {
  const genStart = useAppSelector(selectGenStart)
  const genEnd = useAppSelector(selectGenEnd)
  const { data } = useGetPokemonListByIndexQuery({ genStart, genEnd })
  console.log(data)

  return <div className={style.content}>Hello</div>
}

export default PokemonInfo
