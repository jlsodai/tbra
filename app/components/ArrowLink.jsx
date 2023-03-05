import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

const ArrowLink = (props) => {
	return (
		<div className="mt-6 text-gold font-bold">
			<Link {...props} className="inline-block mr-4">
				{props.title}
			</Link>
			<CgArrowLongRight className="inline-block" />
		</div>
	);
};
export default ArrowLink;
