import React, { useState } from 'react'

import Menu from './Menu'

const MenuOpen = () => {

    const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
        <button onClick={() => setMenuOpen(!menuOpen)}  className="btn-theme-menu">
          {menuOpen ? (<i className="fa-solid fa-xmark" ></i>) : (<i className="fa-solid fa-bars" ></i>) }
        </button>
        {menuOpen ? (<Menu />) : (<></>)}
    
    </>
  )
}

export default MenuOpen