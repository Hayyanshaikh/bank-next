import Image from 'next/image';

const ProductCard = ({ imageSrc, title, description }) => {
  return (
		<div className="product_card flex flex-col gap-[24px] text-center items-center">
			<Image className="" src={imageSrc} alt={title} width="72px" height="72px" />
			<div className="flex flex-col gap-[12px]">
				<h4 className="font-normal text-[20px]">{title}</h4>
				<p className="text-color text-[14px] lg:text-[16px] font-light">{description}</p>
			</div>
		</div>
  );
}

export default ProductCard;