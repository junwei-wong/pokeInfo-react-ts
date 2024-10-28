import Pokemon from "./Pokemon"
import Home from "./Home"

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
]
