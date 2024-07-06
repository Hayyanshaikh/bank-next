'use client'
import React from 'react';
import Tabs from '../utils/Tabs.js';
import Button from '../utils/Button.js';
import Heading from '../utils/Heading.js';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from '../ui/TestimonialCard.js';
import TestimonialData from '../../data/TestimonialData.js';

const Testimonial = () => {
	return (
		<section className="testimonial">
			<div className="container">
				<div className="flex flex-col lg:flex-row items-center lg:items-end gap-[20px] text-center lg:text-left lg:gap-[150px] mb-[80px]">
					<Heading
						heading="Our"
						space="mb-0"
						highlight="Testimonials"
						text="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
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
				 <Swiper
		      className="testimonial-slider"
		      loop={true}
		      modules={[Navigation]}
		      navigation
		      spaceBetween={50}
		      slidesPerView={3}
		      breakpoints={{
		        320: {
		          slidesPerView: 1,
		          spaceBetween: 20,
		        },
		        480: {
		          slidesPerView: 1,
		          spaceBetween: 30,
		        },
		        768: {
		          slidesPerView: 2,
		          spaceBetween: 40,
		        },
		        1024: {
		          slidesPerView: 3,
		          spaceBetween: 50,
		        },
		      }}
		    >
		      {
		        TestimonialData.map((testimonial, index) => (
		          <SwiperSlide key={index}>
		            <TestimonialCard
		              text={testimonial.message}
		              name={testimonial.name}
		            />
		          </SwiperSlide>
		        ))
		      }
		    </Swiper>
			</div>
		</section>
	)
}

export default Testimonial