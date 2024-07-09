import React from 'react';

const OurValueCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[20px] pl-[24px] border-l border-primary">
      <h4 className="text-[#4C4C4D] text-[30px] lg:text-[40px]">{title}</h4>
      <p className="text-color text-[14px] lg:text-[16px] font-light">{description}</p>
    </div>
  );
};

export default OurValueCard;