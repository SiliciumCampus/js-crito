import React, { useState } from 'react'
import NewsUpdateGraphic from '@images/news-updates-gray-graphic.svg'

const NewsUpdate = () => {
    const [email, setEmail] = useState('')
    const [statusMessage, setStatusMessage] = useState('')
    const [statusClass, setStatusClass] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
        setStatusMessage('')
        setStatusClass('color-hidden')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatusMessage('')
        setStatusClass('color-hidden')
        setEmail(e.target['email'].value)

        if (email === '') {

            setStatusMessage(`Something went wrong. Did you enter everything correctly?`)
            setStatusClass('color-error')
        }
        else {
            setStatusMessage('Message sent')
            setStatusClass('color-success')
            clearForm()
        }

    }

    const clearForm = () => {
        setEmail('')
    }

  return (
    <section className='news-update'>
        <div className="update-header-div">
            <h2>Get News Updates By Signup</h2>
        </div>
        <form onSubmit={handleSubmit} className="subscribe-box" noValidate>
            <input type="email" name="email" value={email} onChange={(e) => handleChange(e)} placeholder="username@domain.com" />
            <button className="btn-theme btn-theme-yellow" type="submit" >Subscribe<i className="fa-solid fa-arrow-up-right"></i></button>
            <p className={statusClass}>{statusMessage}</p>
        </form>
        <img src={NewsUpdateGraphic} />
    </section>
  )
}

export default NewsUpdate