import React from 'react'
import Image from 'next/image';

const UseCaseCard = ({ imageSrc, title }) => {
	return (
		<div className="p-[20px] px-[15px] lg:p-[24px] text-center rounded-[12px] flex items-center flex-col bg-background border border-light-background">
			<Image src={imageSrc} alt={title} width={72} height={72} />
      <h4 className="text-white text-[16px] font-normal mt-[14px]">{title}</h4>
		</div>
	)
}

export default UseCaseCard