import React from 'react'
import Brand1 from '@images/brand-logo-1.svg'
import Brand2 from '@images/brand-logo-2.svg'
import Brand3 from '@images/brand-logo-3.svg'
import Brand4 from '@images/brand-logo-4.svg'
import Brand5 from '@images/brand-logo-5.svg'

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <img src={Brand1} />
        <img src={Brand2} />
        <img src={Brand3} />
        <img src={Brand4} />
        <img src={Brand5} />
      </div>
    </section>
  )
}

export default Brands