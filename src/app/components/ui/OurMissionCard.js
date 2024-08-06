import React from 'react';
import Image from 'next/image'

const OurValueCard = ({ title, description, imgUrl, direction }) => {
  return (
    <div className={`flex items-center flex-col ${direction ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <figure className="max-w-[400px] lg:max-w-[545px] flex-shrink-0 flex-grow-auto md:pb-0 pr-[20px] pl-[20px] pt-[20px] md:pt-[40px] md:pr-[40px] md:pl-[40px] lg:pt-[60px] lg:pl-[60px] lg:pr-[60px] rounded-t-[50px] rounded-b-[20px] bg-lighter-background">
        <Image src={imgUrl} alt={title}/>
      </figure>
      <div className={`flex flex-col gap-[10px] text-center md:text-left pt-[30px] md:pt-0 border-t md:border-t-0 border-primary ${direction ? "md:border-l md:pl-[40px]" : "md:border-r md:pr-[40px]"}`}>
        <h4 className="text-white text-[30px] lg:text-[32px]">{title}</h4>
        <p className="text-color text-[14px] lg:text-[16px] font-light">{description}</p>
      </div>
    </div>
  );
};

export default OurValueCard;