import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './components/footer'
import './styles/style.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><i class="fa-solid fa-house"></i> Home</Link>
          </li>
          <li>
            <Link to="About"><i class="fa-solid fa-flag"></i> About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout