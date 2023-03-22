import TBRAKey from "@/app/components/TBRAKey";
const SectionTitle = ({ title, position = "left", className, children }) => {
	return (
		<div className={`flex ${className}`} data-aos="fade-up">
			{position === "left" && <TBRAKey size="sm" className="mr-5" />}
			<h3 className="inline-block font-halyard text-5xl font-extralight">
				{title} {children}
			</h3>
			{position === "right" && <TBRAKey size="sm" className="ml-5" />}
		</div>
	);
};
export default SectionTitle;
