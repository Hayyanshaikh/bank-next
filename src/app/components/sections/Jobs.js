import React from 'react';
import JobCard from '../ui/JobCard.js';
import jobData from '../../data/jobData.js';
import Heading from '../utils/Heading.js';

const Jobs = () => {
	return (
		<section className="">
			<div className="container">
				<Heading
          highlight="Job Openings"
          text="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
        />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
					{jobData.map((job, index) => (
			      <JobCard key={index} job={job} />
			    ))}
				</div>
			</div>
		</section>
	)
}

export default Jobs