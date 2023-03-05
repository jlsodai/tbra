const Stats = ({ stat, info }) => {
	return (
		<div className="text-center">
			<h2 className="text-8xl">{stat}</h2>
			<p className="uppercase">{info}</p>
		</div>
	);
};
export default Stats;
