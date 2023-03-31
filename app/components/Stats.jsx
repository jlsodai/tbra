const Stats = ({ stat, info }) => {
	return (
		<div className="text-center">
			<p className="text-8xl font-libreb font-bold">{stat}</p>
			<p className="uppercase">{info}</p>
		</div>
	);
};
export default Stats;
