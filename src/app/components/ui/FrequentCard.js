import React from 'react'

const FrequentCard = ({question, answer}) => {
	return (
		<div className="p-[30px] lg:p-[40px] flex flex-col border border-light-background rounded-[10px]">
			<h4 className="text-[18px] font-medium pb-[24px] mb-[24px] border-b border-light-background">{question}</h4>
			<p className="text-[14px] lg:text-[16px] text-color font-light">{answer}</p>
		</div>
	)
}

export default FrequentCard