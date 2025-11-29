import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear any authentication tokens or user data
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    // Navigate to login page
    navigate('/login')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="navbar-icon">🛍️</span>
          <span className="navbar-title">BuyNest</span>
        </div>
        <div className="navbar-links">
          <NavLink
            to="/app/products"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="link-icon">📦</span>
            Products
          </NavLink>
          {
            localStorage.getItem('authToken') ?
              <button
                onClick={handleLogout}
                className="nav-link logout-button"
              >
                <span className="link-icon">🚪</span>
                Logout
              </button> :
              <button
                onClick={handleLogin}
                className="nav-link logout-button"
              >
                <span className="link-icon">🚪</span>
                Log in
              </button>
          }
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar