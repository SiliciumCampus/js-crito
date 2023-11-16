import React from 'react'

const Buttons = ({ theme, text, url }) => {
  const btnTheme =  `btn-theme btn-theme-${theme}`
  var video

  if (theme === 'video') { video = true}
  else { video = false}

  return (
    <>
      {video ? (
      <a className="btn-theme-video" href={url}>
        <i className="fa-solid fa-play"></i>{text}
      </a>
      ) : ( 
      <a className={btnTheme} href={url} >
        {text}
        <i className="fa-solid fa-arrow-up-right"></i>
      </a>) }
    </>
   
  )
}

export default Buttons