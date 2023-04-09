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
}) => {
	return (
		<div className={`flex items-start py-8 md:py-20 gap-6 ${className}`}>
			<TBRAKey />
			<div>
				<h3 className="font-halyard font-extralight text-3xl md:text-5xl">
					{heading}
				</h3>
				{children && <div className="prose">{children}</div>}
				{linkTitle && (
					<div className="mt-6 text-mustard font-bold">
						<Link
							href={url}
							className={`${
								linkui === "btn" && "text-white btn bg-mustard"
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
		</div>
	);
};

export default KeySection;
