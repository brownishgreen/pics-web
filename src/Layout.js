import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './styles/style.css'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><i class="fa-solid fa-house"></i> Pics Web</Link>
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