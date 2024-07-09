import React from 'react';
import Heading from "../utils/Heading.js";
import OurValueCard from '../ui/OurValueCard.js';
import ourValueData from '../../data/ourValueData.js';

const OurValue = () => {
  return (
    <section>
      <div className="container">
        <Heading
          heading="Our"
          highlight="Values"
          text="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] lg:gap-[60px]">
          {ourValueData.map((value, index) => (
            <OurValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>  
    </section>
  );
};

export default OurValue;