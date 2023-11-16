import React from 'react'
import { NavLink } from 'react-router-dom'
import WhiteGraphic from '@images/showcase-white-graphic.svg'

const Banner = () => {
  return (
    <section className="banner">
      <div>
        <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/contacts" >Contact</NavLink>
        </nav>
      </div>
      <h1>Let´s Connect</h1>
      <img className="showcase-white-graphic" src={WhiteGraphic} />
    </section>
  )
}

export default Banner