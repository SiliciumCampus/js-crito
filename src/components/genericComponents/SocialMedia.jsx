import React from 'react'

const SocialMedia = ({styling}) => {
    const styleClass = `${styling}-social-media`
  return (
    <div className={styleClass}>
        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
  )
}

export default SocialMedia