import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      {/* Logo */}
      <span className="font-extrabold text-2xl text-white tracking-wide drop-shadow-md">
        Entri
      </span>

      {/* Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition duration-300 
            ${
              isActive
                ? "bg-white text-blue-600 shadow-md"
                : "text-white hover:bg-white/20"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition duration-300 
            ${
              isActive
                ? "bg-white text-blue-600 shadow-md"
                : "text-white hover:bg-white/20"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition duration-300 
            ${
              isActive
                ? "bg-white text-blue-600 shadow-md"
                : "text-white hover:bg-white/20"
            }`
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}
