import React from 'react'

import Showcase from '../components/homeComponents/Showcase'
import Brands from '../components/homeComponents/Brands'
import Features from '../components/homeComponents/Features'
import AboutCompany from '../components/homeComponents/AboutCompany'
import OurServices from '../components/homeComponents/OurServices'
import WhyChooseUs from '../components/homeComponents/WhyChooseUs'
import ProjectAndCases from '../components/homeComponents/ProjectAndCases'
import MeetOurTeam from '../components/homeComponents/MeetOurTeam'
import Testimonial from '../components/homeComponents/Testimonial'
import ArticleAndNews from '../components/homeComponents/ArticleAndNews'
import NewsUpdate from '../components/genericComponents/NewsUpdate'


const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <ProjectAndCases />
      <MeetOurTeam />
      <Testimonial />
      <ArticleAndNews />
      <NewsUpdate />
    </main>
  )
}

export default Home