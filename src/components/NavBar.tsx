import { NavLink } from "react-router-dom"
import { ROUTES } from "../app/routes/route"

const NavBar = () => {
  return (
    <nav className="flex items-center w-full gap-1">
      <NavLink to={"/"} className="p-1">
        Home
      </NavLink>
      {ROUTES[0].children.map(route => {
        if (route.title === "Home") return null
        return (
          <NavLink
            to={route.path}
            key={route.path}
            className={({ isActive }) =>
              [
                "p-2 hover:bg-gray-600 hover:text-white rounded-lg",
                isActive ? "bg-black text-white" : "",
              ].join(" ")
            }
          >
            {route.title}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default NavBar
