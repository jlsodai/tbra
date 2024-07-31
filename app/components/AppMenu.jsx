import Link from "next/link";

const AppMenu = ({ className }) => {
	return (
		<div className={className}>
			<Link
				href="https://membersforum.theboardroomafrica.com/login"
				target="_blank"
				className="hover:text-mustard mr-4"
			>
				Login
			</Link>
			<Link href="/membership" className="btn uppercase text-white">
				Signup
			</Link>
		</div>
	);
};
export default AppMenu;
