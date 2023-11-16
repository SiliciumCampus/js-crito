import React from 'react'
import SectionTitle from '../genericComponents/SectionTitle'
import CardBox from '../genericComponents/CardBox'
import Buttons from '../genericComponents/Buttons'

const OurServices = () => {
  return (
    <section className="services-section" >
      <SectionTitle section="Our Services" title="We Provide The Best Service For Consulting" />
      <div className="card-section">
        <CardBox text1="Business Advice" text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."  />
        <CardBox text1="Startup Business" text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."  />
        <CardBox text1="Financial Advice" text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."  />
        <CardBox text1="Risk Management" text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."  />
      </div>
      <Buttons theme="gray" text="Browse Services" url="/" />
    </section>
  )
}

export default OurServices