import React from 'react'
import SectionTitle from '../genericComponents/SectionTitle'
import Buttons from '../genericComponents/Buttons'
import TestimonialBox from '../genericComponents/TestimonialBox'

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <SectionTitle section="Testimonial" title="What Our Client Says" />
      <TestimonialBox />
      <Buttons theme="black" text="All Reviews" url="/" />
    </section>
  )
}

export default Testimonial