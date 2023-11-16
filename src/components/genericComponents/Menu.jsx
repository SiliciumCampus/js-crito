import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>  
        <nav className="main-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    </>
  
  )
}

export default Menu