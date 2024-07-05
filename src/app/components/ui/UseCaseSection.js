import UseCaseCard from './UseCaseCard.js';
import UseCaseState from './UseCaseState.js';
import Button from '../utils/Button.js'

const UseCaseSection = ({ title, description, direction, cards, stats }) => {
  return (
    <div className={`use_case_section flex items-center gap-[60px] ${direction ? direction : "flex-col lg:flex-row"}`}>
      <div className="flex-1">
      	<div className="use_case_cards grid grid-cols-2 gap-[10px] p-[20px] lg:p-[40px] rounded-[20px] bg-lighter-background">
	        {cards.map((card, index) => (
	          <UseCaseCard key={index} imageSrc={card.imageSrc} title={card.title} />
	        ))}
	      </div>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-[50px] flex-1">
      	<hgroup className="text-center lg:text-left">
      		<h2 className="text-white text-[20px] lg:text-[26px] font-medium">{title}</h2>
      		<p className="text-color font-light text-[14px] lg:text-[16px] mt-[10px]">{description}</p>
      	</hgroup>
	      <div className="flex flex-col md:flex-row items-center md:items-start gap-[50px]">
	        {stats.map((stat, index) => (
	          <UseCaseState key={index} percentage={stat.percentage} description={stat.description} />
	        ))}
	      </div>
      	<Button text="Learn More" light={true} />
      </div>
    </div>
  );
};

export default UseCaseSection;
