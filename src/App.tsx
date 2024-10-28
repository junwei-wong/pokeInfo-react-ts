import { RouterProvider } from "react-router-dom"
import { router } from "./app/routes/routers"

const App = () => {
  return <RouterProvider router={router} />
}

export default App
