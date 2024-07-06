import React from 'react'
import Image from 'next/image';
import Tabs from '../utils/Tabs.js'
import Button from '../utils/Button.js';
import Heading from '../utils/Heading.js';
import ProductCard from '../ui/ProductCard.js'
import productIcon1 from '../../assets/images/icons/product_icon_1.svg';
import productIcon2 from '../../assets/images/icons/product_icon_2.svg';
import productIcon3 from '../../assets/images/icons/product_icon_3.svg';

const OurProducts = () => {

	const products = [
	  { imageSrc: productIcon1, title: 'Checking Accounts', description: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.' },
	  { imageSrc: productIcon2, title: 'Savings Accounts', description: 'Build your savings with our competitive interest rates and flexible savings account options. Whether you\'re saving for a specific goal or want to grow your wealth over time, we have the right account for you.' },
	  { imageSrc: productIcon3, title: 'Loans and Mortgages', description: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.' },
	];


	return (
		<section className="out_products">
			<div className="container">
				<div className="flex flex-col lg:flex-row items-center lg:items-end gap-[20px] text-center lg:text-left lg:gap-[150px] mb-[80px]">
					<Heading
						heading="Our"
						space="mb-0"
						highlight="Products"
						text="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
					/>
					<Tabs
						tabs={
							[
						    { text: 'For Individuals', small: 'px-[18px] py-[10px]' },
						    { text: 'For Teams', small: 'px-[18px] py-[10px]' },
						  ]
						}
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px]">
					{products.map((product, index) => (
		        <ProductCard
		          key={index}
		          imageSrc={product.imageSrc}
		          title={product.title}
		          description={product.description}
		        />
		      ))}
				</div>
			</div>
		</section>
	)
}

export default OurProducts;