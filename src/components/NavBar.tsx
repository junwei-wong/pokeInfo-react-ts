import { useLocation } from "react-router-dom"
import { ROUTES } from "../app/routes/route"
import { useEffect, useState } from "react"

const NavBar = () => {
  const location = useLocation()
  const [activeLocation, setActiveLocation] = useState("/")

  useEffect(() => {
    const locationText = location.pathname.split("/")[1]
    setActiveLocation(locationText)
  }, [location])

  return (
    <nav className="flex  items-center w-full">
      <a href={"/"} className="p-1 hover:bg-gray-600 active:bg-gray-600">
        Home
      </a>
      {ROUTES[0].children.map(route => {
        if (route.title === "Home") return null
        return (
          <a
            href={route.path}
            key={route.path}
            className={`p-1 hover:bg-gray-600 ${route.title.toLocaleLowerCase() === activeLocation ? "bg-black text-white" : ""}`}
          >
            {route.title}
          </a>
        )
      })}
    </nav>
  )
}

export default NavBar
