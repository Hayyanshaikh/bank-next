import React from 'react';
import Image from 'next/image';
import Button from '../utils/Button.js'
import HeroImg from '../../assets/images/common/hero_img.svg';
import Verified from '../../assets/images/icons/verified.svg';
import AbstractDesign from '../../assets/images/common/abstract_design.svg';

const Hero = () => {
  return (
    <section className="hero">
      <Image
        src={AbstractDesign}
        alt="Abstract Design"
        className="abstract_design"
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="hero_content pr-0 lg:pr-[30px] text-center lg:text-left">
            <div className="inline-flex gap-[4px] py-[8px] pr-[16px] pl-[8px] bg-light-background rounded-full mb-[16px]">    
              <Image
                src={Verified}
                alt="Verified Icon"
                height={20}
                width={20}
              />
              <span className="sm:text-[14px] text-[12px] text-white font-light">No LLC Required, No Credit Check.</span>
            </div>
            <h1 className="sm:text-[38px] mb-[10px] text-[28px]">Welcome to YourBank Empowering Your <span className="text-primary">Financial Journey</span></h1>
            <p className="text-text sm:text-[16px] text-[14px] font-light">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
            <Button
              text="Open Account"
              className="mt-[40px]"
            />
          </div>
          <div className="hero_img mx-auto lg:mt-0 mt-[60px]">
            <Image
              src={HeroImg}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;