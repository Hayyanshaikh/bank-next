import React from 'react';
import TopSection from '../../components/sections/TopSection.js';
import Frequently from '../../components/sections/Frequently.js';
import Subscribe from '../../components/sections/Subscribe.js';
import OurValue from '../../components/sections/OurValue.js';
import OurBenefits from '../../components/sections/OurBenefits.js'
import Jobs from '../../components/sections/Jobs.js';
import TopImage from '../../assets/images/backgrounds/top_1.webp';

const Careers = () => {
  
  return (
    <>
      <TopSection
        heading='Welcome to <span class="text-primary font-medium">BankNext</span> Careers!'
        text="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
        imgSrc={TopImage}
      />
      <OurValue />
      <OurBenefits />
      <Jobs />
      <Frequently />
      <Subscribe />
    </>
  )
}

export default Careers;
