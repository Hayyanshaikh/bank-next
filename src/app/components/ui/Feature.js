import React from 'react';
import Image from 'next/image';
import arrow from '../../assets/images/icons/arrow.svg'

const Feature = ({title, text}) => {
	return (
		<div className="flex flex-col gap-[24px] bg-lighter-background rounded-[10px] p-[30px] md:p-[40px] border border-light-background">
			<div className="flex justify-between items-center">
				<h4 className="text-[18px] font-normal">{title}</h4>
				<Image
					src={arrow}
					alt={title}
				/>
			</div>
			<p className="text-[14px] lg:text-[16px] font-light text-color">{text}</p>
		</div>
	)
}

export default Feature