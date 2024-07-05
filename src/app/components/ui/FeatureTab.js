import React from 'react'

const FeatureTab = ({text, active, onClick}) => {
	return (
		<button onClick={onClick} className={`px-[20px] py-[14px] flex-shrink-0 flex-grow-auto border border-light-background rounded-full text-[14px] transition hover:text-primary hover:bg-background ${active ? "text-primary bg-background" : "text-white bg-lighter-background"}`}>
			{text}
		</button>
	)
}

export default FeatureTab;