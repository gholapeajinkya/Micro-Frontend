import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-icon">🛍️</span>
          <span className="navbar-title">Micro Shop</span>
        </div>
        <div className="navbar-links">
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="link-icon">📦</span>
            Products
          </NavLink>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="link-icon">🛒</span>
            Cart
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar