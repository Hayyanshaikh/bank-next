import React from 'react';
import Heading from "../utils/Heading.js";
import OurMissionCard from '../ui/OurMissionCard.js';
import ourMissionData from '../../data/ourMissionData.js';

const OurMisson = () => {
  return (
    <section>
      <div className="container">
        <Heading
          highlight="Mission & Visions"
          text="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
        />
        <div className="flex flex-col gap-[50px] md:gap-0">
          {ourMissionData.map((mission, index) => (
            <OurMissionCard
              key={index}
              direction={index % 2 == 0 ? true : false}
              imgUrl={mission.image}
              title={mission.title}
              description={mission.description}
            />
          ))}
        </div>
      </div>  
    </section>
  );
};

export default OurMisson;