import React from 'react';
import Image from 'next/image';

const TopSection = ({heading, text, imgSrc}) => {
	return (
		<section className="top_section py-[20px]">
			<div className="container">
				<div className="top_wrapper flex flex-col-reverse lg:flex-row relative items-start justify-end p-[14px] lg:p-[40px] rounded-[20px] bg-lighter-background">
					<div className="w-full relative lg:absolute lg:top-[40px] lg:left-[40px] lg:mt-0 -mt-[41px]">
						<div className="flex-1 flex text-center lg:text-left flex-col gap-[20px] lg:max-w-[658px] p-[24px] lg:p-[60px] relative rounded-[20px] lg:rounded-[20px] lg:rounded-tr-none lg:rounded-br-[60px] bg-background">
							<h1 className="text-[28px] lg:text-[48px] text-white font-medium" dangerouslySetInnerHTML={{ __html: heading }} />
							<p className="text-[14px] lg:text-[16px] font-light text-color">{text}</p>
						</div>
					</div>
					<figure className="top_section_image flex-grow-auto w-full lg:w-1/2 rounded-[16px] overflow-hidden">
						<Image
							className="object-cover w-full"
							src={imgSrc}
							alt="Top Image"
						/>
					</figure>
				</div>
			</div>
		</section>
	)
}

export default TopSection