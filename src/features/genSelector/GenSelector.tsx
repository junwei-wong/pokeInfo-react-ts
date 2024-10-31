import { useAppDispatch } from "../../app/hooks"
import { selectByGeneration } from "./genSelectorSlice"

const generations = [1, 2, 3, 4, 5, 6]

const Options = generations.map(gen => (
  <option key={gen} value={gen}>
    Generation {gen}
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
    <div>
      <select
        name="gen-select"
        id="gen-select"
        onChange={onChangeHandler}
        className="outline-dotted rounded-sm"
      >
        {Options}
      </select>
    </div>
  )
}
