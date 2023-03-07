import Link from "next/link";

const Menu = () => {
	return (
		<>
			<Link className="menulink" href="/about-us">
				About Us
			</Link>
			<Link className="menulink" href="/board-roles">
				Board Roles
			</Link>
			<a className="menulink" href="#">
				Executive Development
			</a>
			<a className="menulink" href="#">
				Events
			</a>
			<a className="menulink" href="#">
				Partners
			</a>
			<a className="menulink" href="#">
				Research
			</a>
		</>
	);
};
export default Menu;
