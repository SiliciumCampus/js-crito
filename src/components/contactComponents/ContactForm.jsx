import React, { useState } from 'react'
import Buttons from '../genericComponents/Buttons'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState()

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState()

    const [terms, setTerms] = useState(false)
    const [termsError, setTermsError] = useState(false)

    const [statusMessage, setStatusMessage] = useState('')
    const [statusClass, setStatusClass] = useState('')
    
    const [error, setError] = useState(true)


    const handleChange = (e) => {
        
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value, 2))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 5))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 8))
                break
            case 'terms':
                setTerms(e.target.checked)
                break
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatusMessage('')
        setStatusClass('color-hidden')
        


        if (!nameError || !emailError || !messageError) {
            setError(false)
        }

        if (e.target['terms'].checked && !error) {
            const user = {name, email, message}
            const json = JSON.stringify(user)
            setTermsError(false)

            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body: json
            })
    
            switch (result.status) {
                case 200:
                    setStatusMessage('Message sent')
                    setStatusClass('color-success')
                    clearForm()
                    break
                case 400:
                    setStatusMessage(`Something went wrong. Did you enter everything correctly?`)
                    setStatusClass('color-error')
                    break
            }
        }
        else if (!e.target['terms'].checked)
        {
            setTermsError(true)
        }
        else if (error) {
            setStatusMessage(`You need to enter all fields!`)
            setStatusClass('color-error')
        }
    
    }

    const validateLength = (value, minLength=1) => {
        if (value.length < minLength)
            return true
        else return false
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setTerms(false)
        setTermsError(false)
    }
    const clearStatusMessage = () => {
        setStatusMessage('')
        setStatusClass('color-hidden')
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <h2>Leave us a message for any information.</h2>
        <div className="form-input">
            <label className={`${nameError ? 'color-error' : 'color-default'}`}>{`Name ${nameError ? 'is too short' : ''}`}</label>
            <input type="text" name="name" value={name} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-input">
            <label className={`${emailError ? 'color-error' : 'color-default'}`}>{`Email ${emailError ? 'is too short' : ''}`}</label>
            <input type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-input">
            <label className={`${messageError ? 'color-error' : 'color-default'}`}>{`Message ${messageError ? 'is too short' : ''}`}</label>
            <textarea name="message" value={message} onChange={(e) => handleChange(e)} ></textarea>
        </div>
        <div className="form-terms">
            <p className={`${termsError ? 'color-error' : 'color-default'}`}>{`Terms ${termsError ? 'must be checked' : ''}`}</p>
            <div className="terms-box">
                <input type="checkbox" name="terms" checked={terms} onChange={(e) => handleChange(e)} />
                <label>I have read the terms and agree to have my information stored according with GDPR. </label>
            </div>
        </div>
        <div className="form-button">
            <button className="btn-theme btn-theme-yellow" type="submit" >Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
            <p className={statusClass}>{statusMessage}</p>
        </div>
    </form>
  )
}

export default ContactForm