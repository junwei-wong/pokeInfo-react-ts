import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"

describe("NavBar component", () => {
  test("renders NavBar", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    expect(screen.getByText("Pokemon")).toBeInTheDocument()
    expect(screen.getByText("Berries")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
})
