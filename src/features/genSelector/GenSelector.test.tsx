import { describe, test, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { GenSelector } from "./GenSelector"
import { Provider } from "react-redux"
import { store } from "../../app/store"

describe("GenSelector component", () => {
  test("renders select element with options", () => {
    render(
      <Provider store={store}>
        <GenSelector />
      </Provider>
    )

    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getAllByRole("option")).toHaveLength(6)
    expect(screen.getByText("Generation 1")).toBeInTheDocument()
    expect(screen.getByText("Generation 2")).toBeInTheDocument()
    expect(screen.getByText("Generation 3")).toBeInTheDocument()
    expect(screen.getByText("Generation 4")).toBeInTheDocument()
    expect(screen.getByText("Generation 5")).toBeInTheDocument()
    expect(screen.getByText("Generation 6")).toBeInTheDocument()
  })

  test("have value 2 when select option changes", () => {
    render(
      <Provider store={store}>
        <GenSelector />
      </Provider>
    )

    const selectElement = screen.getByRole("combobox")
    expect(selectElement).toHaveValue("1")
    fireEvent.change(selectElement, { target: { value: 2 } })

    expect(selectElement).toHaveValue("2")
  })
})
