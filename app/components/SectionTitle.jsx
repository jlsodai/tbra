import TBRAKey from "@/app/components/TBRAKey";
const SectionTitle = ({ title, className, children }) => {
	return (
		<div
			className={`flex items-start gap-6 ${className}`}
			data-aos="fade-up"
		>
			<TBRAKey />
			<h3 className="inline-block font-halyard text-5xl font-extralight">
				{title} {children}
			</h3>
		</div>
	);
};
export default SectionTitle;
