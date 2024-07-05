import React from 'react'

const UseCaseState = ({ percentage, description }) => {
	return (
		<div className="flex items-center lg:items-start flex-col gap-[5px]">
      <span className="text-primary text-[40px] font-medium">{percentage}%</span>
      <span className="text-color text-[15px] font-light">{description}</span>
    </div>
	)
}

export default UseCaseState