import TBRAKey from "@/app/components/TBRAKey";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

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
				{linkTitle && (
					<div className="mt-6 text-tender font-bold">
						<Link
							href={url}
							className={`${
								linkui === "btn" && "text-white btn bg-tender"
							} "inline-block"`}
						>
							{linkTitle}
						</Link>
						{linkui === "arrow" && (
							<CgArrowLongRight className="inline-block ml-4" />
						)}
					</div>
				)}
			</div>
			{keyPosition === "right" && <TBRAKey />}
		</>
	);
};

export default KeySection;
