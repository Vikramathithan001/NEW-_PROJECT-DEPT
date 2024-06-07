import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>MyApp</Link>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to='/' onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to='/services' onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
