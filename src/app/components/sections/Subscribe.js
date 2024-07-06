import React from 'react'
import Button from '../utils/Button.js';
import Heading from '../utils/Heading.js';

const Subscribe = () => {
	return (
		<section className="subscribe my-[120px] p-0">
			<div className="container">
				<div className="subscribe_wrapper flex flex-col lg:flex-row text-center lg:text-left items-center p-[30px] lg:p-[60px] bg-lighter-background border border-light-background rounded-[20px] gap-[24px] lg:gap-[150px]">
					<Heading
						heading="Start your financial journey with"
						space="mb-0"
						className="subs_heading"
						highlight="YourBank today!"
						text="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
					/>
					<Button
						className="flex-shrink-0 flex-grow-auto"
            text="Open Account"
          />
				</div>
			</div>
		</section>
	)
}

export default Subscribe