import React from 'react';
import Image from 'next/image';

const OurBenefitCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-[24px] p-[40px] rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[40px] rounded-br-[40px] bg-lighter-background">
      <div className="flex items-center gap-4">
        <Image
          src={imgSrc}
          alt={title}
        />
        <h4 className="text-white text-[30px] lg:text-[20px]">{title}</h4>
      </div>  
      <p className="text-color text-[14px] lg:text-[16px] font-light">{description}</p>
    </div>
  );
};

export default OurBenefitCard;
