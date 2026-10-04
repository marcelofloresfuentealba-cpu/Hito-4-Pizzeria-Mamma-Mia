
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="brand">
          <img src="/vite.svg" alt="logo" />
          <span>Pizzería Mamma Mía</span>
        </Link>
        <div className="menu">
          <NavLink to="/" className={({isActive}) => isActive ? 'badge' : undefined}>Inicio</NavLink>
        </div>
      </div>
    </nav>
  )
}
