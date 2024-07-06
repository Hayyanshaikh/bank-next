// Tabs.js
import React from 'react';
import Button from './Button';

const Tabs = ({ tabs }) => {
  return (
    <div className="tabs bg-lighter-background flex p-[12px] border border-light-background rounded-full flex-auto flex-shrink-0">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          text={tab.text}
          small={tab.small}
        />
      ))}
    </div>
  );
};

export default Tabs;
