const SubMenu = ({ sublinks, mobile = false }) => {
	return (
		<ul
			className={`${
				mobile
					? "mobile-sub divide-y border-t hidden"
					: "submenu hidden"
			}`}
		>
			{sublinks.map((sublink, i) => (
				<li key={i}>
					<a
						href={sublink.href}
						className={`${mobile ? "py-2 w-full pl-4" : ""}`}
						target={`sublink.target ?? ''`}
					>
						{sublink.name}
					</a>
				</li>
			))}
		</ul>
	);
};
export default SubMenu;
