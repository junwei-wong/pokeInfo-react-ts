import Pokemon from "./Pokemon"
import Home from "./Home"
import Berries from "./Berries"
import App from "../../App"

export const ROUTES = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
      },
      {
        path: "/pokemon",
        element: <Pokemon />,
        title: "Pokemon",
      },
      {
        path: "/berries",
        element: <Berries />,
        title: "Berries",
      },
    ],
  },
]
