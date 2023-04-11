/* eslint-disable @next/next/no-img-element */
const ProgrammeLogos = ({ logos = [], className }) => {
	return (
		<>
			<div
				className={`partnerLogos flex flex-wrap items-center justify-center mt-10 gap-10 ${className}`}
			>
				{logos.map((img, i) => (
					<img
						key={i}
						data-aos="fade-up"
						src={img.logourl}
						alt=""
						className="aos-init aos-animate"
					/>
				))}
			</div>
		</>
	);
};
export default ProgrammeLogos;
