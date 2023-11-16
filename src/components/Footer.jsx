import React, { useState } from 'react'
import Logo from '@images/footer-logotype.svg'
import { NavLink } from 'react-router-dom'
import FooterMenuOpen from './genericComponents/FooterMenuOpen'
import SocialMedia from './genericComponents/SocialMedia'


const Footer = () => {
  


  return (
    <footer >
      <div className="logo-box">
        <nav>
        <NavLink to="/" ><img src={Logo} alt="Logo" /></NavLink>
        </nav> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
      </div>
      <div className="footer-menu-section">
        <FooterMenuOpen input="Company" />
        <FooterMenuOpen input="Help" />
        <FooterMenuOpen input="Resources" />
        <FooterMenuOpen input="Link" />
      </div>
      <div className="footer-copy">
        <div className="copy">
          <p>&copy; 2023 Crito - Consulting Company Inc. </p>
          <p>All Rights Reserved.</p>
        </div>
        <div>
          <SocialMedia styling="footer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer