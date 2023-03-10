import TBRAKey from "@/app/components/TBRAKey";
import ArrowLink from "@/app/components/ArrowLink";

const KeySection = ({
	heading,
	className,
	url = "#",
	linkTitle,
	linkui = "arrow",
	children,
	keyPosition = "left",
}) => {
	return (
		<>
			{keyPosition === "left" && <TBRAKey />}
			<div className={`col-span-3 ${className}`}>
				<h3>{heading}</h3>
				{children && <div className="prose">{children}</div>}
				{linkTitle && linkui === "arrow" && (
					<ArrowLink href={url} title={linkTitle} />
				)}
			</div>
			{keyPosition === "right" && <TBRAKey />}
		</>
	);
};

export default KeySection;
