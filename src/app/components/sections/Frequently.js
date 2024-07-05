"use client";
import React from "react";
import Heading from "../utils/Heading";
import FaqData from '../../data/FaqData.js';
import FrequentCard from '../ui/FrequentCard.js'

const Frequently = () => {
	return (
		<section className="">
			<div className="container">
				<Heading
          heading="Frequently Asked"
          highlight="Questions"
          text="Still you have any questions? Contact our Team via support@banknext.com"
        />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
				{
					FaqData.map((faq, index) => (
						<FrequentCard
							key={index}
							question={faq.question}
							answer={faq.answer}
						/>
					))
				}
			</div>
			</div>
		</section>
	)
}

export default Frequently