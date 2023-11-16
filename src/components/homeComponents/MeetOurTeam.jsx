import React from 'react'
import SectionTitle from '../genericComponents/SectionTitle'
import Buttons from '../genericComponents/Buttons'
import Boxes from '../genericComponents/Boxes'
import TeamImg1 from '@images/team-img-1-kristine.png'
import TeamImg2 from '@images/team-img-2-mark.png'
import TeamImg3 from '@images/team-img-3-kimberly.png'
import TeamImg4 from '@images/team-img-4-justin.png'

const MeetOurTeam = () => {
  return (
    <section className="meet-team-section">
      <SectionTitle section="Meet Our Team" title="Experience Team Members" />
      <Buttons theme="gray" text="Browse Team" url="/" />
      <div className="team-div">
        <Boxes styling="team-box" img={true} src={TeamImg1} text1="Kristine Palmer" text2="Chef Operation Officer" />
        <Boxes styling="team-box" img={true} src={TeamImg2} text1="Mark Aubri" text2="Senior Consultant" />
        <Boxes styling="team-box" img={true} src={TeamImg3} text1="Kimberly Hansen" text2="Senior Consultant" />
        <Boxes styling="team-box" img={true} src={TeamImg4} text1="Justin Willoman" text2="Senior Tech Consultant" />
      
      </div>
      <div className="design-dots">
        <i className="fa-duotone fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-duotone fa-circle"></i>
        <i className="fa-duotone fa-circle"></i>
        <i className="fa-duotone fa-circle"></i>
      </div>
    </section>
  )
}

export default MeetOurTeam