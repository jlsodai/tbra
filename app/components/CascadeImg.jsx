/* eslint-disable @next/next/no-img-element */
const CascadeImg = ({
	src,
	className,
	top = false,
	position = "left",
	negative = false,
	imgClass = "",
}) => {
	return (
		<div
			className={`imgbg relative w-full before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[1000%] md:before:bg-mustard md:mb-[70px] md:before:bigborder ${
				position === "left" ? "before:right-[50%]" : "before:left-[50%]"
			} ${negative ? "before:h-[calc(100%-70px)]" : ""}`}
		>
			<img
				src={src}
				alt="Mask Image"
				className={`w-full md:w-[450px] md:h-[533px] object-cover ${className} ${
					top ? "" : "md:top-[70px]"
				} relative ${
					position === "left" ? "md:mr-[100px]" : "md:ml-[100px]"
				} imgClass`}
			/>
		</div>
	);
};
export default CascadeImg;
