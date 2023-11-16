import React from 'react'


const Boxes = ({ styling, img, src, text1, text2, text3 }) => {


  return (
    <div className={styling}>
        {img ? (<img src={src} />) : (<i className={src} ></i>) }
        <div className="text-box">
          <h3 className="text1">{text1}</h3>
          <p className="text2">{text2}</p>
          <p className="text3">{text3}</p>
        </div>
    </div>
  )
}

export default Boxes