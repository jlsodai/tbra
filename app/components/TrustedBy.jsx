/* eslint-disable @next/next/no-img-element */
const TrustedBy = ({ logos = [], className }) => {
	return (
		<>
			<div
				className={`partnerLogos flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 items-center justify-center md:mt-10 ${className}`}
			>
				{logos.map((img, i) => (
					<img
						key={i}
						data-aos="fade-up"
						src={img.src}
						style={img.style || {}}
						alt=""
						className="aos-init aos-animate"
					/>
				))}
			</div>
		</>
	);
};
export default TrustedBy;
