import React from 'react'
import whyUsImgSmall from '@images/why-choose-us-img-small.png'
import SectionTitle from '../genericComponents/SectionTitle'
import Boxes from '../genericComponents/Boxes'
import WhyIcone1 from '@images/why-us-icone1.svg'
import WhyIcone2 from '@images/why-us-icone2.svg'
import WhyIcone3 from '@images/why-us-icone3.svg'
import WhyIcone4 from '@images/why-us-icone4.svg'


const WhyChooseUs = () => {
  return (
    <section className="why-us-section">
      <img src={whyUsImgSmall} />
      <SectionTitle section="Why Choose Us" title="Why We Are The Best Business Consulting Agency" />
      <div className="why-us-div">
      <Boxes styling="icone-top" img={true} src={WhyIcone1} text1="Process Excellence" text2="Lorem, ipsum dolor sit amet consectetur."  />
      <Boxes styling="icone-top" img={true} src={WhyIcone2} text1="Strategic Planning" text2="Lorem, ipsum dolor sit amet consectetur."  />
      <Boxes styling="icone-top" img={true} src={WhyIcone3} text1="Experience Design" text2="Lorem, ipsum dolor sit amet consectetur."  />
      <Boxes styling="icone-top" img={true} src={WhyIcone4} text1="Artificial Inteligence" text2="Lorem, ipsum dolor sit amet consectetur."  />
      
      </div>
    </section>
  )
}

export default WhyChooseUs