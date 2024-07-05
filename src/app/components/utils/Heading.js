'use client'
import React from 'react'

const Heading = ({ heading, highlight, text,space, className }) => {

	return (
		<div className={`section-heading text-center lg:text-left ${space ? space : "mb-[60px]"} ${className ? className : ""}`}>
			<h2 className="text-[28px] lg:text-[38px] font-medium mb-[10px]">{heading} <span className="text-primary font-medium">{highlight}</span></h2>
			<p className="font-light text-[14px] lg:text-[16px] text-color">{text}</p>
		</div>
	)
}

export default Heading;