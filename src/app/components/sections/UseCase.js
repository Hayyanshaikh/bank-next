'use client'
import React from 'react'
import Image from 'next/image';
import Button from '../utils/Button.js'
import Heading from '../utils/Heading.js';
import UseCaseData from '../../data/UseCaseData.js';
import UseCaseSection from '../ui/UseCaseSection.js'

const UseCase = () => {
	return (
		<section className="">
			<div className="container">
				<Heading
					highlight="Use Cases"
					text="At BankNext, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
				/>
				<div className="space-y-16">
					{UseCaseData.map(function(useCase, index) {
						return (
							<UseCaseSection
			          key={index}
			          title={useCase.title}
			          description={useCase.description}
			          cards={useCase.cards}
			          stats={useCase.stats}
			          direction={index % 2 !== 0 ? "flex-col lg:flex-row-reverse" : ""}
			        />
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default UseCase