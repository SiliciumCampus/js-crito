import React from 'react'
import Boxes from '../genericComponents/Boxes'
import Location from '@images/contact-info-location.svg'
import Tel from '@images/contact-info-tel.svg'
import Email from '@images/contact-info-email.svg'


const ContactInfo = () => {
  return (
    <>
      <Boxes styling="image-left-box" img={true} src={Location} text1="Visit us" text2="Sveavägen 31" text3="111 34 STOCKHOLM" />
      <Boxes styling="image-left-box" img={true} src={Tel} text1="Call us" text2="+46 (8) 121 470 50" text3="+46 (8) 121 470 51" />
      <Boxes styling="image-left-box" img={true} src={Email} text1="Email us" text2="info@crito.com" text3="support@crito.com" />
    </>
  )
}

export default ContactInfo