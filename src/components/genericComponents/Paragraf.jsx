import React from 'react'

const Paragraf = ({ styling, p }) => {

    const classStyle = (`paragraf-section ${styling}` )

  return (
    <div className={classStyle}>
        <p>{p}</p>
    </div>
  )
}

export default Paragraf