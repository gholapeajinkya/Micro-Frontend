import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <span>☰</span>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink >
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar