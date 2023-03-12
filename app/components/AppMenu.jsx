import Link from "next/link";

const AppMenu = ({ className }) => {
	return (
		<div className={className}>
			<Link href="#" className="hover:text-mustard mr-4">
				Login
			</Link>
			<Link href="#" className="btn uppercase text-white">
				Apply
			</Link>
		</div>
	);
};
export default AppMenu;
