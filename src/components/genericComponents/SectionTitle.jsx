import React from 'react'

const SectionTitle = ({ section, title}) => {

  return (
    <div className="section-title">
        <p>{section}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle