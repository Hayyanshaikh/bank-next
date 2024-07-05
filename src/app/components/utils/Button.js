'use client';
import React from 'react';

const Button = ({ text, small, className, rootProps, light }) => {
  const buttonSize = small ? "py-[14px] px-[24px]" : "py-[14px] px-[24px]";
  const buttonStyle = light ? "bg-lighter-background text-white border border-light-background" : "bg-primary text-background";
  
  return (
    <button {...rootProps} className={` ${className ? className : ""} ${buttonStyle} ${buttonSize} rounded-full text-[14px]`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
