/* eslint-disable @next/next/no-img-element */
const TrustedBy = ({ logos = [], className }) => {
	return (
		<>
			<div
				className={`md:partnerLogos flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 items-center justify-center md:mt-10 ${className}`}
			>
				{logos.map((img, i) => (
					<img
						key={i}
						data-aos="fade-up"
						src={img.src}
						style={img.style || {}}
						alt=""
						className="aos-init aos-animate max-w-[100px] max-h-[70px] md:max-w-none"
					/>
				))}
			</div>
		</>
	);
};
export default TrustedBy;
