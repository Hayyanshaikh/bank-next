'use client'
import React from 'react'

const Heading = ({heading, text}) => {
	return (
		<div className="section-heading">
			<h2>{heading}</h2>
			<p>{text}</p>
		</div>
	)
}

export default Heading