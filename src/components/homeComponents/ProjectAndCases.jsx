import React from 'react'
import SectionTitle from '../genericComponents/SectionTitle'
import ProjectBox from '../genericComponents/ProjectBox'
import Buttons from '../genericComponents/Buttons'
import ProjectImg1 from '@images/project-img-1.png'
import ProjectImg2 from '@images/project-img-2.png'
import ProjectImg3 from '@images/project-img-3.png'
import ProjectImg4 from '@images/project-img-4.png'

const ProjectAndCases = () => {
  return (
    <section className="projects-section">
      <SectionTitle section="Project & Case Studies" title="Let’s Looks Our Global Projects" />
      <div className="projects-div">
        <ProjectBox src={ProjectImg1} title="Grow your business" url="/" />
        <ProjectBox src={ProjectImg2} title="Why your client needs a responsive website" url="/" />
        <ProjectBox src={ProjectImg3} title="Educate you employees to get better results" url="/" />
        <ProjectBox src={ProjectImg4} title="Business insights is a important piece of your business" url="/" />
      </div>
      <Buttons theme="black" text="All Recent Projects " url="/" />
    </section>
  )
}

export default ProjectAndCases