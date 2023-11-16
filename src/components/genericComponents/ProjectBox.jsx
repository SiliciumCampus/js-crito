import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectBox = ({ src, title, url }) => {
  return (
    <div className="project-box">
        <NavLink to={url}>
            <img src={src}  />
            <h3>{title}</h3>
            <p>Read More <i className="fa-solid fa-arrow-up-right"></i></p>
        </NavLink>
    </div>
  )
}

export default ProjectBox