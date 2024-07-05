"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import FeatureTab from "../ui/FeatureTab";
import Feature from "../ui/Feature";
import FeaturesData from "../../data/FeaturesData";

const Features = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    FeaturesData[0].category
  );

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="our_features">
      <div className="container">
        <Heading
          heading="Our"
          highlight="Features"
          text="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
        />
        <div className="flex lg:items-start flex-col lg:flex-row gap-[20px]">
          <div className="features_tabs lg:flex-shrink-0 lg:flex-grow-auto flex lg:flex-col gap-[20px] lg:gap-[20px] rounded-[10px] p-[20px] lg:p-[40px] bg-lighter-background border border-light-background overflow-auto">
            {FeaturesData.map((tab, index) => (
              <FeatureTab
                key={index}
                text={tab.category}
                onClick={() => handleTabClick(tab.category)}
                active={selectedCategory === tab.category}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {FeaturesData.find(
              (tab) => tab.category === selectedCategory
            )?.features.map((feature, index) => (
              <Feature key={index} title={feature.title} text={feature.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
