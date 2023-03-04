/* eslint-disable @next/next/no-img-element */
const CascadeImg = ({ src, position = "left" }) => {
	return (
		<div
			className={`imgbg relative w-full before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[1000%] before:bg-gold mb-[70px] ${
				position === "left" ? "before:right-[50%]" : "before:left-[50%]"
			}`}
		>
			<img
				src={src}
				alt="Mask Image"
				className={`top-20 relative ${
					position === "left" ? "mr-[100px]" : "ml-[100px]"
				}`}
			/>
		</div>
	);
};
export default CascadeImg;
