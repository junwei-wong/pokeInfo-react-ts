import { Outlet, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import { router } from "./app/routes/routers"

const App = () => {
  return (
    <div className="max-w-7xl px-2 py-1 sm:py-2 sm:px-8 flex flex-col items-center justify-center">
      <NavBar />
      <div className="max-w-4xl">
        <Outlet />
      </div>
    </div>
  )
}

export default App
