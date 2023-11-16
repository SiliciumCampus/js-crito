import React from 'react'
import logo from '@images/header-logotype.svg'
import MenuOpen from './genericComponents/MenuOpen'
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <>
      
      <header>
        <Link to="/" ><img src={logo} alt="logotype" /></Link>
        <MenuOpen />
      </header>
      
    </>
  )
}

export default Header