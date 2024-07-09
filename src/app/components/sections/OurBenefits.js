import React from 'react';
import Heading from "../utils/Heading.js";
import OurBenefitCard from '../ui/OurBenefitCard.js';
import ourBenefitsData from '../../data/ourBenefitsData.js';

const OurBenefits = () => {
  return (
    <section>
      <div className="container">
        <Heading
          heading="Our"
          highlight="Benefits"
          text="At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px]">
          {ourBenefitsData.map((value, index) => (
            <OurBenefitCard
              key={index}
              imgSrc={value.image}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>  
    </section>
  );
};

export default OurBenefits;