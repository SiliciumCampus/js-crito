import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../components/contactComponents/Banner'
import ContactInfo from '../components/contactComponents/ContactInfo'
import LeaveMessage from '../components/contactComponents/LeaveMessage'
import MapSection from '../components/contactComponents/MapSection'

const Contacts = () => {
  return (
    <main>
      <Banner />
      <ContactInfo />
      <LeaveMessage />
      <MapSection />
    </main>
  )
}

export default Contacts