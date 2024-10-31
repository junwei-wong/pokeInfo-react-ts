import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="max-w-7xl px-2 py-1 sm:py-2 sm:px-8 flex flex-col items-center justify-center">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
