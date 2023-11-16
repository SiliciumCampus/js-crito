import React, { useState } from 'react'
import FooterMenu from './FooterMenu'

const FooterMenuOpen = ({input}) => {
  const [menuOpen, setMenuOpen] = useState(false)
    

  return (
    <>
        <button onClick={() => setMenuOpen(!menuOpen)}  className="footer-btn">
          {input}
          {menuOpen ? (<i className="fa-solid fa-angle-up"></i>) : (<i className="fa-solid fa-angle-down"></i>) }
        </button>
        {menuOpen ? (<FooterMenu input={input} />) : (<></>)}
        
    </>
  )
}

export default FooterMenuOpen