import React from 'react';
import Hero from '../components/sections/Hero.js';
import OurProducts from '../components/sections/OurProducts.js';
import UseCase from '../components/sections/UseCase.js';
import Features from '../components/sections/Features.js';
import Frequently from '../components/sections/Frequently.js';

const Home = () => {
  return (
    <>
      <Hero/>
      <OurProducts/>
      <UseCase/>
      <Features/>
      <Frequently/>
    </>
  )
}

export default Home;