import React from 'react'
import Boxes from '../genericComponents/Boxes'
import AboutCompanySmall from '@images/about-company-img-small.png'
import SectionTitle from '../genericComponents/SectionTitle'
import Paragraf from '../genericComponents/Paragraf'
import Buttons from '../genericComponents/Buttons'

const AboutCompany = () => {
  return (
    <section className="about-section">
      <Boxes styling="img-blue-box" img={true} src={AboutCompanySmall} text1="Samantha Brown," text2="Founder" text3='"Lorem ipsum dolor sit amet consectetur adipisicing elit."'  />
      <SectionTitle section="About Company" title="We Are Business Consulting & Credit Repair Experts" />
      <Paragraf p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos." />
      <Paragraf styling="about-paragraf" p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos." />
      <Buttons theme="gray" text="Learn More" url="/" />
      <Buttons theme="video" text="Intro Video" url="/" />
    </section>
  )
}

export default AboutCompany