import React from 'react';
import Heading from '../../components/utils/Heading.js';
import TopSection from '../../components/sections/TopSection.js';
import TopImage from '../../assets/images/backgrounds/top_2.webp';
import OurMission from '../../components/sections/OurMission.js';

const About = () => {
   
  return (
    <>
      <TopSection
        heading='Where Banking Meets <span class="text-primary font-medium">Excellence!</span>'
        text="At YourBank, we believe banking should empower individuals and businesses to reach their financial goals. As a trusted financial institution, we deliver exceptional services with a focus on innovation, personalized solutions, and integrity. Join us to experience a new level of banking excellence."
        imgSrc={TopImage}
      />
      <OurMission/>
    </>
  )
}

export default About;
