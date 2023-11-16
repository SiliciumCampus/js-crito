import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterMenuItem = ({title, url}) => {
  return (
    <>
        <NavLink className="footer-menu-item" to={url} >{title}</NavLink>
    </>
  )
}

export default FooterMenuItem