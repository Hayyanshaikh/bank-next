import React from 'react';
import Image from 'next/image';
import Quote from '../../assets/images/icons/quote.svg';

const TestimonialCard = ({text, name}) => {
	return (
		<div className="flex flex-col items-center text-center gap-[40px]">
			<Image
				src={Quote}
				alt="Quote Icon"
			/>
			<p className="text-white font-normal text-[16px]">{text}</p>
			<h5 className="text-primary font-medium text-[16px]">{name}</h5>
		</div>
	)
}

export default TestimonialCard;