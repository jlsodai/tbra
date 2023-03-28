import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

const TbraLink = ({ url = "#", linkTitle, ui = "arrow" }) => {
	return (
		<>
			{linkTitle && (
				<Link
					href={url}
					className={`inline-block mt-4 text-mustard font-bold ${
						ui === "btn" && "text-white btn bg-mustard"
					}`}
				>
					{linkTitle}
					{ui === "arrow" && (
						<CgArrowLongRight className="inline-block ml-4" />
					)}
				</Link>
			)}
		</>
	);
};
export default TbraLink;
