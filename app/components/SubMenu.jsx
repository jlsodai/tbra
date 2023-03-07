const SubMenu = ({ sublinks }) => {
	return (
		<ul className="submenu hidden">
			{sublinks.map((sublink, i) => (
				<li key={i}>
					<a href={sublink.href}>{sublink.name}</a>
				</li>
			))}
		</ul>
	);
};
export default SubMenu;
