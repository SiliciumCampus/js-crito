import React from 'react'
import SectionTitle from '../genericComponents/SectionTitle'
import Buttons from '../genericComponents/Buttons'
import Boxes from '../genericComponents/Boxes'

const Features = () => {
  return (
    <section className="features-section">
      <SectionTitle section="Features" title="Our Accounting is trusted by thousand of companies" />
      <Buttons theme="yellow" text="Learn More" url="/" />
      <div className="feature-box">
        <Boxes styling="icone-top" img={false} src="fa-light fa-handshake" text1="Business advice" text2="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <Boxes styling="icone-top" img={false} src="fa-light fa-lightbulb-dollar" text1="Startup business" text2="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <Boxes styling="icone-top" img={false} src="fa-light fa-chart-mixed-up-circle-dollar" text1="Financial advice" text2="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <Boxes styling="icone-top" img={false} src="fa-light fa-shield-exclamation" text1="Risk management" text2="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
      </div>
      </section>
  )
}

export default Features