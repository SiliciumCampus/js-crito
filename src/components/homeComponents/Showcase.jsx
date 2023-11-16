import React from 'react'
import ShowcaseImg from '@images/showcase-img-small.png'
import Buttons from '../genericComponents/Buttons'

const Showcase = () => {
  return (
    <section className="showcase-section">
      <img className="ShowcaseImg" src={ShowcaseImg} />
      <div className="showcase-div">
        <h1>We Provide The Best Business Solutions</h1>
        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
        <Buttons theme="yellow" text="Get consulting" url="/" />
        <Buttons theme="gray" text="Learn More" url="/" />
      </div>
    </section>
  )
}

export default Showcase