import { useAppDispatch } from "../../app/hooks"
import styles from "./GenSelector.module.css"
import { selectByGeneration } from "./genSelectorSlice"

const generations = [1, 2, 3, 4, 5, 6]

const Options = generations.map(gen => (
  <option key={gen} value={gen}>
    Gen {gen}
  </option>
))

export const GenSelector = () => {
  const dispatch = useAppDispatch()
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(
      selectByGeneration(
        event.currentTarget.options[event.currentTarget.selectedIndex].value,
      ),
    )

  return (
    <div className="flex gap-1 justify-center items-center">
      <label htmlFor="gen-select">Choose generation</label>
      <select name="gen-select" id="gen-select" onChange={onChangeHandler}>
        {Options}
      </select>
    </div>
  )
}
