import React from 'react'

const CardBox = ({ text1, text2 }) => {

  return (
    <div className="card-box">
        <i className="fa-light fa-horizontal-rule"></i>
        <div className="card-text">
            <h3 className="text1">{text1}</h3>
            <p className="text2">{text2}</p>
        </div>
        <i className="fa-regular fa-arrow-right"></i>
    </div>
  )
}

export default CardBox