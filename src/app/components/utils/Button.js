'use client'
import React from 'react'

const Button = ({text, className, rootProps}) => {
	return (
		<button {...rootProps} className={`bg-primary text-background py-[14px] px-[24px] rounded-full text-[14px] ${className ? className : ""}`}>
			<span>{text}</span>
		</button>
	)
}

export default Button
